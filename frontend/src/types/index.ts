export interface Timer{
    start: boolean,
    min: number,
    sec: number
}

export interface User{
    username: string,
    email: string,
    token: string,
    photo: string
}

export interface Card{
    id: number,
    title: string,
    image_url: string,
    rarity: string,
}