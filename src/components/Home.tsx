import React, { useEffect, useState } from "react";

type HomeProps = {
  data: string;
  style?: React.CSSProperties;
  handleClick1?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Home = ({ data, style, handleClick1 }: HomeProps) => {
  const [text, setText] = useState("");
  const [total, setTotal] = useState(0);
  const [price, setPrice] = useState(0);

  // useEffect(() => {
  //   alert("Total of money updated !");
  // }, [total]);

  return (
    <div>
      <h1 style={style}>{data}</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            alert("You have just cliked on Enter key");
          }
        }}
      />
      <h1>Total: {total}</h1>
      Enter price:
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.currentTarget.value))}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            setTotal(total + price);
          }
        }}
      />
      <button onClick={handleClick1}>Button 1</button>
    </div>
  );
};

export default Home;
