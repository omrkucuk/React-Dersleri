import { useLocation, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/dashboard";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form gönderme apisi buraya gelcek
    if (success) {
      navigate(from, { replace: true });
    }
  };

  return <form onSubmit={handleSubmit}>...</form>;
};

export default LoginPage;

/*
    Seçenekler
    navigate("/dashboard");  // yönlendir
    navigate("/dashboard", {replace: true});  // history'e eklemeden yönlendir (geri tuşu yok)
    navigate(-1) // bir sayfa geri git
    navigate(1) // bir sayfa ileri git
*/
