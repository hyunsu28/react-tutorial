import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";

const 아이템들 = createSlice({
  name: "아이템",
  //App.js의 입장에서 usState를 null한
  initialState: [
    {
      id: 0,
      title: "점메추",
      content: "점심은 마라탕 먹어야징",
      author: "부평구마라탕킬러",
    },
    {
      id: 1,
      title: "스타벅스 음료 추천",
      content: "바닐라크림콜드브루 쫀맛",
      author: "여왕별",
    },
    {
      id: 2,
      title: "탕후루 과일 추천",
      content: "사실상 실세는 딸기가 아닌 토마토마토마토",
      author: "왕머시기네",
    },
  ],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    deletePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    },

    updatePost: (state, action) => {
      return state.map((post) =>
        post.id === action.payload ? action.payload : post
      );
    },
  },
});

const { reducer: postsReducer } = 아이템들;

// configureStore에서 {} 넣고, 그 안에 reducer:{}넣고 변수를 만들어서 담는다
const store = configureStore({
  reducer: {
    //이름이고 : 위에서 한 아이템들임.
    아이템: postsReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Routes, Route 태그 및 react-router-dom을 사용하기 위해선 최상단에 BrowserRouter로 감싸줘야한다 */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

export const { addPost, deletePost, updatePost } = 아이템들.actions;
