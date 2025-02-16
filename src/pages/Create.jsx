import React, { useState } from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate } from "react-router-dom";

export default function Create({ items, setItems }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //제목이 변경될 경우
  const onTitlechangeHandler = (event) => {
    setTitle(event.target.value);
  };
  //내용이 변경될  경우
  const onContenttlechangeHandler = (event) => {
    setContent(event.target.value);
  };
  const navigate = useNavigate();
  //리스트추가
  const onAddButtonHandler = () => {
    setItems([
      ...items,
      {
        id: items.length + 1,
        title: title,
        content: content,
        author: "작성자",
      },
    ]);
    navigate("/");
  };

  return (
    <>
      <Header />
      <Container>
        <form
          style={{
            height: "600px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            console.log("제출!");
          }}
        >
          <div>
            <input
              placeholder="제목"
              type="text"
              value={title}
              onChange={onTitlechangeHandler}
              style={{
                width: "100%",
                height: "60px",
                fontSize: "18px",
                borderRadius: "12px",
                border: "1px solid lightgrey",
                padding: "8px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div
            style={{
              height: "400px",
            }}
          >
            <textarea
              placeholder="내용"
              type="text"
              value={content}
              onChange={onContenttlechangeHandler}
              style={{
                resize: "none",
                height: "100%",
                width: "100%",
                fontSize: "18px",
                borderRadius: "12px",
                border: "1px solid lightgrey",
                padding: "12px",
                boxSizing: "border-box",
              }}
            />
          </div>
          <button
            style={{
              width: "100%",
              height: "40px",
              border: "none",
              color: "white",
              borderRadius: "12px",
              backgroundColor: "skyblue",
              cursor: "pointer",
            }}
            onClick={onAddButtonHandler}
          >
            추가하기
          </button>
        </form>
      </Container>
    </>
  );
}
