import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components";
import { Post } from "../types/post";
import { getPosts } from "../services/postService";
import { PostListResponseDto } from "../dto/PostDto";

const PostListPage: React.FC = () => {
  const [posts, setPosts] = useState<PostListResponseDto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error("게시글 불러오기 실패:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <p>로딩 중...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>게시글 목록</h1>
      <Link to="/write">
        <Button variant="primary">글쓰기</Button>
      </Link>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li key={post.id} style={{ margin: "16px 0", borderBottom: "1px solid #ddd" }}>
            <Link to={`/posts/${post.id}`} style={{ textDecoration: "none", color: "black" }}>
              <h3>{post.title}</h3>
              <p>{post.username} · {post.createdAt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostListPage;
