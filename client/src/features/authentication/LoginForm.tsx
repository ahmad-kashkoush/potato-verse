import styled from "styled-components";
import FormRow from "@/components/FormRow";
import { SubmitHandler, useForm } from "react-hook-form";
import useLogin from "@/features/authentication/useLogin";
import { User } from "@/constants/types";
const defaultValues = {
  email: "ak@ak.com",
  password: "12345678",
};

function LoginForm() {
  const {
    register,
    handleSubmit,
    // getValues,
    formState: { errors },
    // reset,
  } = useForm<User>({
    defaultValues: defaultValues,
  });

  const { login } = useLogin();

  const onSubmit: SubmitHandler<User> = (data) => {
    console.log(data);
    login(data);
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormRow errorMessage={errors?.email?.message ?? ""}>
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
      </FormRow>
      <FormRow errorMessage={errors?.password?.message ?? ""}>
        <input
          type="password"
          placeholder="Enter your password"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "passowrd must be min 8 character long",
            },
          })}
        />
      </FormRow>
      <button type="submit">login</button>
    </StyledForm>
  );
}
export default LoginForm;

const StyledForm = styled.form`
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 1rem;

  & input,
  & button {
    display: inline-block;
    width: 100%;
    padding: 1rem;
    border-radius: 7px;
  }
  & input {
    margin-top: 1.5rem;
    background: var(--bg-input-field);
    color: var(--c-input-field);
   
  }
  /** TODO: add btn hover*/
  & button {
    margin-top: 3rem;
    text-transform: capitalize;
    font-size: 1.25rem;
    font-weight: 600;
    width: 100%;
    background: var(--bg-btn-primary);
    color: var(--c-btn-primary);
  }
`;
