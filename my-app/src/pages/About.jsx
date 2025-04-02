export default function About() {
  // 示例员工数据，4 个员工
  const employees = [
    {
      name: "张三",
      position: "前端开发",
      bio: "热爱 React 和 Tailwind，拥有 5 年开发经验。",
    },
    {
      name: "李四",
      position: "后端开发",
      bio: "擅长 Node.js 和数据库优化，技术宅一枚。",
    },
    {
      name: "王五",
      position: "设计师",
      bio: "UI/UX 专家，喜欢创造美观实用的设计。",
    },
    {
      name: "赵六",
      position: "产品经理",
      bio: "负责产品规划，推动团队高效协作。",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-4 text-blue-400">关于我们</h2>
      <p className="text-lg text-gray-700 mb-6">
        这是一个关于页面，介绍我们的团队。以下是我们的核心成员：
      </p>

      {/* 外层 div，带边框并居中 */}
      <div className="border border-gray-300 rounded-lg p-6 max-w-4xl mx-auto">
        {/* 员工卡片，每行 2 个，固定宽度，高度自适应 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {employees.map((employee, index) => (
            <div
              key={index}
              className="bg-stone-200 border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow w-80"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{employee.name}</h3>
              <p className="text-gray-600 font-semibold mb-2">{employee.position}</p>
              <p className="text-gray-500">{employee.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}