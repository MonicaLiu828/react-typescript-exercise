// // Pascalcasing
// function Message() {
//   //  jsx -> convert to js code
//   const name = "ddd";
//   //  {} input shoulde be any javascript expression(a piece of code that produces value(call一个function之类的))
//   if (name) return <h1>Hello {name}</h1>;
//   return <h1> hello World</h1>;
// }

// export default Message;
import { useState } from "react";
function Message() {
  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "John",
  //   },
  // });

  // const handleClick = () => {
  //   setGame({ ...game, player: { ...game.player, name: "bob" } });
  // };
  // const [pizza, setPizza] = useState({
  //   name: "spicy pepperoni",
  //   toppings: ["Mushroom"],
  // });

  // const handleClick = () => {
  //   setPizza({ ...pizza, toppings: [...pizza.toppings, "pineapple"] });
  // };

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      {
        id: 1,
        title: "Product 1",
        quantity: 1,
      },
      {
        id: 2,
        title: "Product 2",
        quantity: 1,
      },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: 2 } : item
      ),
    });
  };
  return (
    <>
      <div>{cart.items[0].quantity}</div>
      <button onClick={handleClick}>button for test</button>
    </>
  );
}

export default Message;
