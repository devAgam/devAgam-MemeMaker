import React, { useEffect, useState } from "react";
import Templates from "./Templates";
export const TemplatesInit = () => {
  const [memes, setMemes] = useState([]);
  const [memeIndex, setMemeIndex] = useState(0);
  const shuffleMemes = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then((res) => {
      res.json().then((res) => {
        const _memes = res.data.memes;
        shuffleMemes(_memes);
        setMemes(_memes);
        console.log(_memes);
      });
    });
  }, []);

  return (
    <div>
      {" "}
      <Templates memes={memes} />{" "}
    </div>
  );
};
