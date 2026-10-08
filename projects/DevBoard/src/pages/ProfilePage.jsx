import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import api from "../api/axios";
import Spinner from "../components/ui/Spinner";
import ProfileField from "../components/dashboard/ProfileField";
import { Mail, Phone, Globe, Building } from "lucide-react";

const ProfilePage = () => {
  const { user: authUser } = useSelector((state) => state.auth);

  const { data: profile, isLoading } = useQuery({
    queryKey: ["user", authUser?.id],
    queryFn: async () => {
      const { data } = await api.get(`/users/${authUser.id}`);
      return data;
    },
    enabled: !!authUser?.id, // id varsa çek
    staleTime: 10 * 60 * 1000,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center py-16">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="max-w-xl space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Profil</h1>

      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark.border-gray-700 shadow-md overflow-hidden">
        <div className="h-24 bg-linear-to-r from-indigo-500 to-purple-600" />
        <div className="px-6 pb-6">
          <div className="-mt-10 mb-4">
            {profile?.image ? (
              <img
                src={profile.image}
                alt={profile.firstName}
                className="w-20 h-20 rounded-2xl border-4 border-white dark:border-gray-800 object-cover"
              />
            ) : (
              <div className="w-20 h-20 rounded-2xl border-4 border-white dark:border-gray-800 bg-indigo-500 flex items-center justify-center text-white font-bold text-2xl">
                {authUser?.firstName?.[0]}
              </div>
            )}
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            {profile?.firstName} {profile?.lastName}
          </h2>
          <p className="text-sm text-indigo-600 dark:text-indigo-400">@{profile?.username}</p>
        </div>
      </div>

      {/* Detay Bilgileri */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm px-6 py-2">
        <ProfileField icon={Mail} label={"Email"} value={profile?.email || "-"} />
        <ProfileField icon={Phone} label={"Telefon"} value={profile?.phone || "-"} />
        <ProfileField icon={Globe} label={"Yaş"} value={profile?.age || "-"} />
        <ProfileField icon={Building} label={"Şirket"} value={profile?.company?.name || "-"} />
      </div>
    </div>
  );
};

export default ProfilePage;
