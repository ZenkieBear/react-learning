import { useEffect, useState } from "react";

export default function Game() {
  const [card, setCard] = useState<Card|null>(null);
  const [goldCardCount, setGoldCardCount] = useState(0);
  const [round, setRound] = useState(1);
//   const [isGameOver, setIsGameOver] = useState(false);

  // 🔴 Avoid: Chains of Effects that adjust the state solely to trigger each other
//   useEffect(() => {
//     if (card !== null && card.gold) {
//         setGoldCardCount(c => c + 1);
//     }
//   }, [card]);

//   useEffect(() => {
//     if (goldCardCount > 3) {
//         setRound(r => r + 1);
//         setGoldCardCount(0);
//     }
//   })

//   useEffect(() => {
//     if (round > 5 ) {
//         setIsGameOver(true);
//     }
//   }, [round]);

//   useEffect(() => {
//     alert('Game over!');
//   }, [isGameOver]);

  // ✅ Calculate what you can during rendering
  const isGameOver = round > 5;

  function handlePlaceCard(nextCard: Card) {
    if (isGameOver) {
      throw Error('Game already ended!');
    }
    
    // ✅ Calculate all the next state in the event handler
    setCard(nextCard);
    if (nextCard.gold) {
      setGoldCardCount(goldCardCount + 1);
    } else {
      setGoldCardCount(0);
      setRound(round + 1);
      if (round === 5) {
        alert('Good game!')
      }
    }
  }

  // ...
  return (
    <>
      {/*  */}
    </>
  )
}