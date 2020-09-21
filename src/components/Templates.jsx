import React, { useEffect, useState } from "react";
import { Button, Card, Col, Image } from "react-bootstrap";

const Templates = () => {
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

  return memes.length ? (
    <div>
      {memes &&
        memes.map((temps) => (
          <div className="column">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={temps.url} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
    </div>
  ) : (
    <div> </div>
  );
};

export default Templates;
