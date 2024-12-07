import { useController, UseControllerProps, useForm } from "react-hook-form";

type FormValue = {
  FirstName: string;
};

const Input = (props: UseControllerProps<FormValue>) => {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input {...field} placeholder={props.name} />
      <p>{fieldState.isTouched && "Touched"}</p>
      <p>{fieldState.isDirty && "Dirty"}</p>
      <p>{fieldState.invalid ? "invalid" : "valid"}</p>
    </div>
  );
};

const App = () => {
  const { handleSubmit, control } = useForm<FormValue>({
    defaultValues: {
      FirstName: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: FormValue) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input control={control} name="FirstName" rules={{ required: true }} />
      <input type="submit" />
    </form>
  );
};

export default App;
