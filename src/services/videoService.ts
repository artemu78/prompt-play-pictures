
interface GenerateVideoParams {
  prompt: string;
  apiKey: string;
  generateAudio: boolean;
  duration: number;
}

export const generateVideo = async (params: GenerateVideoParams): Promise<string> => {
  const { prompt, apiKey, generateAudio, duration } = params;
  
  try {
    console.log('Starting video generation with params:', { prompt, generateAudio, duration });
    
    const response = await fetch('https://fal.run/fal-ai/veo3', {
      method: 'POST',
      headers: {
        'Authorization': `Key ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        duration: `${duration}s`,
        generate_audio: generateAudio,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('API error response:', errorData);
      
      if (response.status === 401) {
        throw new Error('Invalid API key. Please check your fal.ai API key.');
      } else if (response.status === 400) {
        throw new Error(errorData.detail || 'Invalid request parameters.');
      } else if (response.status === 429) {
        throw new Error('Rate limit exceeded. Please try again later.');
      } else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    }

    const result = await response.json();
    console.log('API response:', result);

    if (!result.video) {
      throw new Error('No video URL returned from the API');
    }

    return result.video.url;
  } catch (error) {
    console.error('Video generation error:', error);
    
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error('An unexpected error occurred during video generation');
    }
  }
};
