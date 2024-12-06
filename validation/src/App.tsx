import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

const App = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { maxLength: 6 })} />
      <input
        {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
        placeholder="Enter lastName"
      />
      <input {...register("age", { min: 18, max: 99 })} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
