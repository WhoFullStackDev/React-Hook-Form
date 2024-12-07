import { Form, useForm } from "react-hook-form";

const App = () => {
  const { register, control } = useForm();

  return (
    <Form
      action="http://localhost:3000/save"
      control={control}
      onSuccess={() => {
        alert("Your application is updated.");
      }}
      onError={() => {
        alert("Submission has failed.");
      }}
    >
      <input {...register("firstName", { required: true })} />
      <input {...register("lastName", { required: true })} />
      <button>Submit</button>
    </Form>
  );
};

export default App;
