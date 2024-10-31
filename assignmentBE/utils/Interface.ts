
export interface iAuth{
    userName?:string
    email?:string
    password?:string
    avatar?:any
    avatarID?:any
    friend: string []
    request:string []
    article: {} []
}
export interface iAuthor{
    userName?:string
    email?:string
    password?:string
    avatar?:any
    avatarID?:any
    friend: string []
    request:string []
    article: {} []
}

export interface iArticle{
    rate?: number;
  title?: string;
  content?: string;
  description?: string;
  authorID?: string;
  image?: string;
  imageID?: string;
  coverImage?: string;
  coverImageID?: string;
  ratings?: [];
  likes?: [];
  author?: {};
}