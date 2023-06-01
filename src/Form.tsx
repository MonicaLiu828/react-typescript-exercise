import { useRef } from "react";
const Form = () => {
  // useRef to get the dom value, we need to set it up to null at first or it will get undefined will cost error
  //  HTMLInputElement tell typescript it will be the HTMLInputElement
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { age: 0, name: "" };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (nameRef.current) {
          // nameRef.current will get the input dom, then we need to get the input html value by .value
          // but nameRef.curren can be none so we need to do none check at first
          person.name = nameRef.current.value;
        }
        if (ageRef.current) {
          person.age = parseInt(ageRef.current.value);
        }
        console.log(person);
      }}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label"></label>
        name1
        <input
          ref={nameRef}
          id="name"
          type="text"
          className="form-control"
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label"></label>
        age
        <input
          ref={ageRef}
          id="age"
          type="number"
          className="form-control"
        ></input>
      </div>
      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
