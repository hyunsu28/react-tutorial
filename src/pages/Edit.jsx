import React, { Fragment } from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Edit({ items, setItems }) {
  // useParams로 url을 id로 뽑기
  const { id } = useParams();
  const navigate = useNavigate();
  const data = items.find((H) => H.id === parseInt(id));
  const { title, content } = data;
  // items를 find해서 H라고 칭하고, 구조분해할당으로 data를 사용하겠다.

  //초기값 불러오기
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(content);

  return (
    <Fragment>
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
            setItems(
              items.map((J) =>
                J.id === parseInt(id)
                  ? { ...items, title: editTitle, content: editContent }
                  : J
              )
            );
            navigate("/");
          }}
        >
          <div>
            <input
              placeholder="제목"
              value={editTitle}
              onChange={(e) => {
                setEditTitle(e.target.value);
              }}
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
              value={editContent}
              onChange={(e) => {
                setEditContent(e.target.value);
              }}
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
              backgroundColor: "orange",
              cursor: "pointer",
            }}
          >
            수정하기
          </button>
        </form>
      </Container>
    </Fragment>
  );
}
