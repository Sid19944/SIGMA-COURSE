import { useState, useEffect } from "react";

export default function Joker() {
  let url = "https://official-joke-api.appspot.com/random_joke";
  let [joke, setJoke] = useState({});

  const getNewJoke = async () => {
    let res = await fetch(url);
    let jsonRes = await res.json();
    console.log(jsonRes);
    setJoke({ setup: jsonRes.setup, punchline: jsonRes.punchline, type : jsonRes.type });
  };

  useEffect(() => {
    async function getJoke() {
      let res = await fetch(url);
      let jsonRes = await res.json();
      console.log(jsonRes);
      setJoke({ setup: jsonRes.setup, punchline: jsonRes.punchline, type : jsonRes.type });
    } getJoke()
  }, []);
  return (
    <div>
      <h3>{joke.setup}</h3>
      <h3>{joke.punchline}</h3>
      <p>type : {joke.type}</p>
      <button onClick={getNewJoke}>New Joke</button>
    </div>
  );
}
