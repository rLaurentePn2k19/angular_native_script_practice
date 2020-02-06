export interface Item {
    id: number;
    name: string;
    role: string;
    type: string;
}

export enum Type{
    Artist = "artist",
    Soccer = "soccer"
}