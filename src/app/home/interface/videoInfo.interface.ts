export interface videoInfo {
    id: string,
    title: string
    channel: {
        name: string,
        id: string,
        profileUrl: string
    }
    views: number,
    postedAt: Date,
    duration: number,
    thumbnailUrl: string,
    videoUrl: string
}