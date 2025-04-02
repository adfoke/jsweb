export default function NotFound() {
    return (
    <div className="min-h-screen flex items-center justify-center bg-beige-200">
      <div className="container mx-auto p-4 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-blue-400">404 - 页面未找到</h2>
        <p className="text-lg mb-4 text-blue-400">
          抱歉，你访问的页面不存在！
        </p>
      </div>
    </div>
    );
  }