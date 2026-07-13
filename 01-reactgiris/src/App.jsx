import UserCard from "./components/UserCard";
import Button from "./components/Button";
import Card from "./components/Card";
import UserList from "./components/UserList";
import Welcome from "./components/Welcome";
import Notification from "./components/Notification";

function App() {
  // ListeRendering
  const fruits = ["Elma", "Armut", "Muz", "Kiraz"];

  return (
    <div>
      <h1>UserCard Propslu</h1>
      <UserCard name="Ahmet" age={25} city="İstanbul" />
      <UserCard name="Ayşe" age={30} city="Ankara" />
      <br />

      <h1>Default Props</h1>
      <Button />
      <Button text="Kaydet" />
      <Button text="Sil" color="red  " />
      <br />

      {/* Children Props Kullanımı */}
      <h1>Children Props Kullanımı </h1>
      <Card title={"Kullanıcı Bilgileri"}>
        <p>İsim: Ahmet</p>
        <p>Email: ahmet@gmail.com</p>
        <button>Düzenle</button>
      </Card>
      <br />

      {/* Liste Render */}
      <h1>Fruits Dizisi</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <h1>UserList</h1>
      <UserList />
      <br />

      {/* Conditional Rendering */}
      <h1>Conditional Rendering</h1>
      <Welcome isLoggedIn={true} />
      <br />

      <h1>Notification</h1>
      <Notification hasMessage={true} message={"Deneme Mesajı"} />
    </div>
  );
}

export default App;
