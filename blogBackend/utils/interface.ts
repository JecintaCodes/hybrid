export interface iAuth{
    userName?: string
    email?: string
    password?: string
    confirmPassword?: string
    avatar?: string
    avatarID?: string
}


export interface iPost{
    title?: string
    content?: string
    image?: string
    imageId?: string
    category?: string
    like?: Array<string>
    views?: Array<string>
}