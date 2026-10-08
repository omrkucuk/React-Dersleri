const ProfileField = ({ icon: Icon, label, value }) => {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-gray-100 dark:border-gray-700 last:border-0">
      <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
        <Icon className="w-4 h-4 *: text-indigo-600 dark:text-indigo-400" />
      </div>
      <div>
        <p className="text-xs text-gray-400 dark:text-gray-500">{label}</p>
        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{value}</p>
      </div>
    </div>
  );
};

export default ProfileField;
