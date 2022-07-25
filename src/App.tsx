import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  const data = {
    content: "Bài kiểm tra giữa kỳ",
    contentStyle: { color: "green" },
  };
  const [isLogin, setIsLogin] = useState(true);
  const handleClick1 = () => alert(data.content);

  return (
    <div className="App">
      {isLogin ? (
        <Home
          data={data.content}
          style={data.contentStyle}
          handleClick1={handleClick1}
        />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
