import { useForm } from "react-hook-form";

export const Form = () => {

  const initData = {
    title: 'react-hook-form demo',
    description: 'demo on react hook form library',
    duration: 15,
    buffer: 5
  }

  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm({
    defaultValues: initData
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  // const titleValue = watch('title');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Title" {...register("title", { required: 'This is required'})} />
      <p>{errors.title?.message}</p>

      <input type="text" placeholder="Description" {...register("description")} />
      <p>{errors.description?.message}</p>

      <input type="number" placeholder="Duration" 
      {...register("duration", {
        required: 'This is required',
        min: {
          value: 5,
          message: 'Duration should be atleast be 5 min'
        },
        max: {
          value: 100,
          message: 'Duration should be less than 100 min'
        }
      })} 
      />
      <p>{errors.duration?.message}</p>

      <input type="number" placeholder="Buffer" 
      {...register("buffer", {
        validate: value => value > 1 && value < 10,
      })} />
      <p>{errors.buffer?.message}</p>

      <input type="submit" />

      {/* <p>{titleValue}</p> */}

    </form>
  );
};
