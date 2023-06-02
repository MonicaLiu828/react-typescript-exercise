import { useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(register("name"));
  // useRef to get the dom value, we need to set it up to null at first or it will get undefined will cost error
  //  HTMLInputElement tell typescript it will be the HTMLInputElement
  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  // const person = { age: 0, name: "" };

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={
        handleSubmit(onSubmit)
        //   (event) => {
        //   event.preventDefault();
        //   if (nameRef.current) {
        //     // nameRef.current will get the input dom, then we need to get the input html value by .value
        //     // but nameRef.curren can be none so we need to do none check at first
        //     person.name = nameRef.current.value;
        //   }
        //   if (ageRef.current) {
        //     person.age = parseInt(ageRef.current.value);
        //   }
        //   console.log(person);
        // }
      }
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label"></label>
        name1
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        ></input>
        {errors.name?.type === "required" && <p>Name is required</p>}
        {errors.name?.type === "minLength" && <p>min length require 3</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label"></label>
        age
        <input
          {...register("age")}
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
