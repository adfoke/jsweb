import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* 导航栏 */}
        <nav className="bg-stone-100 text-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">我的网站</h1>
            <ul className="flex space-x-6">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-orange-500 font-bold" : "hover:text-gray-600"
                  }
                >
                  首页
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-orange-500 font-bold" : "hover:text-gray-600"
                  }
                >
                  关于
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-orange-500 font-bold" : "hover:text-gray-600"
                  }
                >
                  联系
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        {/* 路由内容 */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* 页脚 */}
        <footer className="bg-stone-100 text-white p-4">
          <div className="container mx-auto text-center">
            <p className='text-black'>© 2025 我的网站。保留所有权利。</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;