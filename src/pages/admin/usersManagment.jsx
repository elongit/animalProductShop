
const UsersManagment = () => {
  const users = [
    { id: 1, name: 'Oussama', email: 'oussama@gmail.com', username: 'oussaa11' },
    { id: 2, name: 'Sarah', email: 'sarah@gmail.com', username: 'sarah123' },
    { id: 3, name: 'John', email: 'john@gmail.com', username: 'johnny_doe' },
    { id: 4, name: 'Amine', email: 'amine@gmail.com', username: 'amine_pro' },
    { id: 5, name: 'Fatima', email: 'fatima@gmail.com', username: 'fatima456' },
    { id: 6, name: 'Yassine', email: 'yassine@gmail.com', username: 'yas_coder' },
    { id: 7, name: 'Mohamed', email: 'mohamed@gmail.com', username: 'moha_dev' },
    { id: 8, name: 'Sophia', email: 'sophia@gmail.com', username: 'sophi_star' },
    { id: 9, name: 'Ali', email: 'ali@gmail.com', username: 'ali_master' },
    { id: 10, name: 'Nada', email: 'nada@gmail.com', username: 'nada_artist' },
    { id: 11, name: 'Zineb', email: 'zineb@gmail.com', username: 'zineb_99' },
    { id: 12, name: 'Rachid', email: 'rachid@gmail.com', username: 'rachid_dz' },
    { id: 13, name: 'Laila', email: 'laila@gmail.com', username: 'laila_bee' },
    { id: 14, name: 'Hassan', email: 'hassan@gmail.com', username: 'hassan_dev' },
    { id: 15, name: 'Imane', email: 'imane@gmail.com', username: 'imane_magic' },
  ];
  

  return (
    <div className="relative overflow-x-auto">
      <button className="bg-blue-400 text-white font-bold p-1 mb-5 rounded float-right">
        New User
      </button>

      <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400 clear-both">
        <thead className="text-xs text-black uppercase bg-gray-100">
          <tr>
            <th className="px-3 md:px-6 py-3">Name</th>
            <th className="px-3 md:px-6 py-3">Email</th>
            <th className="px-3 md:px-6 py-3">Username</th>
            <th className="px-3 md:px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="text-black border-b border-slate-200 text-sm md:text-lg">
              <td className="px-6 py-4">{user.name}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.username}</td>
              <td className="px-6 py-4">
                <button className="bg-green-400 text-white font-bold p-1 rounded">
                  Edit
                </button>
                <button className="bg-red-400 text-white font-bold p-1 rounded ml-2">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersManagment;
