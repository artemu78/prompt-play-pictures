export type ModelId = "fal-ai/veo3" | "fal-ai/veo3/fast" | "fal-ai/bytedance/seedance/v1/pro/text-to-video";

export type Model = {
    id: ModelId;
    name: string;
    price: number;
    isAudio: boolean;
    range: [number, number];
}