// Pascalcasing
function Message() {
  //  jsx -> convert to js code
  const name = "ddd";
  //  {} input shoulde be any javascript expression(a piece of code that produces value(call一个function之类的))
  if (name) return <h1>Hello {name}</h1>;
  return <h1> hello World</h1>;
}

export default Message;
