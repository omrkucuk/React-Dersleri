import { useState } from "react";

const RegisterForm = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form verisi: ", form);
    // API çağrısı buraya gelir
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="İsim" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <input name="password" value={form.password} onChange={handleChange} placeholder="Şifre" />
      <button type="submit">Kayıt Ol</button>
    </form>
  );
};

export default RegisterForm;
