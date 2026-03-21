import Ticket from "./Ticket";
import { useState } from "react";
import { genTicket, sum } from "./Help";

export default function Lottery({ n = 3, winCondition }) {
  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = winCondition(ticket);

  let buyTicket = () => {
    setTicket(genTicket(n));
  };
  return (
    <div>
      <h1>Lottery</h1>
      <h3>{isWinning && "Congratulation, You Won!!"}</h3>
      <Ticket ticket={ticket} />
      <button onClick={buyTicket}>Buy New Ticket</button>
    </div>
  );
}
