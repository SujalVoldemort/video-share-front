import { useState } from "react";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between ">
          <h1 className="font-bold">Dashboard</h1>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(prev => !prev)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Layout */}
      <div className="flex min-h-[calc(100vh-4rem)]">

        {/* Sidebar */}
        <aside className= {`w-64 fixed inset-y-0 z-40
        left-0 bg-white 
        transform transition-transform duration-3000  
        ${sidebarOpen ? 'translate-x-0':'-translate-x-full'} md:static md:translate-x-0 px-4 py-6`}>
          <nav>
            <ul className="space-y-4">
              <li>Overview</li>
              <li>Reports</li>
              <li>Settings</li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 ">
          <p>Main dashboard content goes here.</p>
        </main>

      </div>
    </div>
  );
}
