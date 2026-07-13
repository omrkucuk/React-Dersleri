const UserCard = ({ name, age, city }) => {
  return (
    <div className="card">
      <h2>İsim: {name}</h2>
      <p>Yaş: {age}</p>
      <p>Şehir: {city}</p>
    </div>
  );
};

export default UserCard;
