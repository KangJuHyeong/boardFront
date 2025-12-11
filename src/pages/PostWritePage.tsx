import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "../components";
import { createPost } from "../services/postService";

const PostWritePage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!title || !content ) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    try {
      await createPost({ title, content });
      alert("게시글이 등록되었습니다!");
      navigate("/posts");
    } catch (error) {
      console.error("게시글 작성 실패:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>글쓰기</h1>
      <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목" />
      <br /><br />
      <textarea
        style={{ width: "100%", height: "200px", padding: "10px", borderRadius: "6px", border: "1px solid #ddd" }}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용을 입력하세요"
      />
      <br /><br />
      <Button onClick={handleSubmit}>등록</Button>
    </div>
  );
};

export default PostWritePage;
