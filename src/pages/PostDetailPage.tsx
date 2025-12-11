import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../services/postService";
import { Post } from "../types/post";

const PostDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        const data = await getPostById(Number(id));
        setPost(data);
      }
    };
    fetchPost();
  }, [id]);

  if (!post) return <p>로딩 중...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{post.title}</h1>
      <p><b>작성자:</b> {post.author}</p>
      <p>{post.content}</p>
      <p style={{ color: "gray" }}>{post.createdAt}</p>
    </div>
  );
};

export default PostDetailPage;
