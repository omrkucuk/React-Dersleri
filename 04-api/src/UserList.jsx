import { useQuery } from "@tanstack/react-query";
import api from "./lib/axios";

const UserList = () => {
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => api.get("/users").then((r) => r.data),
  });

  if (isLoading)
    return (
      <div className="flex items-center justify-center py-16">
        <p className="text-gray-400 text-sm">Yükleniyor...</p>
      </div>
    );

  if (isError)
    return <p className="text-center text-red-500 py-8 text-sm">Hata: {error.message}</p>;

  return (
    <ul className="flex flex-col gap-2 p-4">
      {users.map((user) => (
        <li key={user.id} className="p-3 bg-gray-50 rounded-lg text-sm text-gray-800">
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
