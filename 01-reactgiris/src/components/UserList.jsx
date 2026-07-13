const UserList = () => {
  const users = [
    { id: 1, name: "Ahmet" },
    { id: 2, name: "Ayşe" },
    { id: 3, name: "Mehmet" },
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
