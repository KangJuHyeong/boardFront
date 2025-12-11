import axios from "axios";
import { Post } from "../types/post";
import { PostListResponseDto } from "../dto/PostDto";

const api = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true, // ✅ 쿠키 자동 포함
});

// 전체 게시글 조회
export const getPosts = async (): Promise<PostListResponseDto[]> => {
  const res = await api.get("/posts");
  return res.data;
};

// 게시글 상세 조회
export const getPostById = async (id: number): Promise<Post> => {
  const res = await api.get(`/posts/${id}`);
  return res.data;
};

// 게시글 작성
export const createPost = async (post: { title: string; content: string }): Promise<Post> => {
  const res = await api.post("/posts", post); // 헤더 제거
  return res.data;
};
