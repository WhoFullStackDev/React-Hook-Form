import { SubmitHandler, useForm } from "react-hook-form";

type Input = {
  example: string;
  exampleRequired: string;
};

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("example")} />
        <input {...register("exampleRequired", { required: true })} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
