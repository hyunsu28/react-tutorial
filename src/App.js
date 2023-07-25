import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    {
      id: 0,
      title: "점메추",
      content: "마라탕이 좋을 거 같다.",
      author: "부평구마라탕킬러",
    },
    {
      id: 1,
      title: "스타벅스 음료 추천",
      content: "바닐라크림콜드브루는 근본이다.",
      author: "여왕별",
    },
    {
      id: 2,
      title: "탕후루 과일 추천",
      content: "사실상 실세는 딸기가 아닌 토마토마토마토",
      author: "왕머시기네",
    },
  ]);
  return (
    // 페이지 이동에 사용되는 Route 태그를 위해선 Routes로 먼저 감싸야 한다.
    <Routes>
      {/* path="/"이기 때문에 '<주소>/'인 주소로 접속할 경우 Main 컴포넌트가 화면에 보여지게 된다.  */}

      <Route path="/" element={<Main items={items} />} />
      <Route path="/detail/:id" element={<Detail items={items} />} />
      <Route
        path="/create"
        element={<Create items={items} setItems={setItems} />}
      />
      <Route path="/edit" element={<Edit />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
