import { CommentResponseDto } from "./CommentResponseDto";

export interface PostListResponseDto {
  id: number;
  title: string;
  username: string;
  createdAt: string;
}

export interface PostResponseDto {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  comments: CommentResponseDto[];
}


export interface PostRequestDto {
  id: number;
  title: string;
  content: string;
}

