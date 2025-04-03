export default function Home() {
  const users = [
    { id: 1, name: "张三", age: 25, email: "zhangsan@example.com" },
    { id: 2, name: "李四", age: 30, email: "lisi@example.com" },
    { id: 3, name: "王五", age: 28, email: "wangwu@example.com" },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* 表格 */}
      <div className="overflow-x-auto max-w-2xl mx-auto w-full">
        <table className="w-full bg-stone-200 border border-gray-300 rounded-lg shadow-md table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 border-b text-left text-gray-700">ID</th>
              <th className="py-3 px-4 border-b text-left text-gray-700">姓名</th>
              <th className="py-3 px-4 border-b text-left text-gray-700">年龄</th>
              <th className="py-3 px-4 border-b text-left text-gray-700">邮箱</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b text-gray-600">{user.id}</td>
                <td className="py-2 px-4 border-b text-gray-600">{user.name}</td>
                <td className="py-2 px-4 border-b text-gray-600">{user.age}</td>
                <td className="py-2 px-4 border-b text-gray-600">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    );
  }
