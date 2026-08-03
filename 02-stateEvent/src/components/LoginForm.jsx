import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register, // input'ları hook'a bağlar
    handleSubmit, // submit handler'ı sarar
    formState: { errors }, // validasyon hataları
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", {
          required: "Email zorunludur",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Geçerli bir email gir",
          },
        })}
        placeholder="Email"
      />
      {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}

      <input
        type="password"
        {...register("password", {
          required: "Şifre zorunludur",
          minLength: { value: 6, message: "En az 6 karakter" },
        })}
        placeholder="Şifre"
      />
      {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}
      <button type="submit">Giriş Yap</button>
    </form>
  );
};

export default LoginForm;
