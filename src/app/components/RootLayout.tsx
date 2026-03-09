import { Outlet, Link, useLocation } from "react-router";
import { LayoutDashboard, FolderKanban, ListTodo, BarChart3, Settings, Search, Bell, HelpCircle, User, Plus, ChevronDown } from "lucide-react";

export function RootLayout() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { path: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/projects", icon: FolderKanban, label: "Projects" },
    { path: "/board", icon: ListTodo, label: "Board" },
    { path: "/backlog", icon: ListTodo, label: "Backlog" },
    { path: "/reports", icon: BarChart3, label: "Reports" },
    { path: "/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0747A6] text-white flex flex-col">
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-[#0747A6] font-bold">J</span>
            </div>
            <span className="font-semibold">Jira Clone</span>
          </div>
        </div>

        <div className="p-4 border-b border-white/10">
          <button className="w-full flex items-center justify-between px-3 py-2 rounded bg-white/10 hover:bg-white/20 transition-colors">
            <span className="text-sm">Project Alpha</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        <nav className="flex-1 p-2 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded mb-1 transition-colors ${
                isActive(item.path)
                  ? "bg-white/20 text-white"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button className="flex items-center gap-2 text-sm text-white/80 hover:text-white">
            <Plus className="w-4 h-4" />
            <span>Create Issue</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="h-14 border-b border-border bg-white flex items-center justify-between px-6">
          <div className="flex items-center gap-4 flex-1 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search issues..."
                className="w-full pl-10 pr-4 py-2 bg-input-background rounded border-0 focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-muted rounded">
              <Bell className="w-5 h-5 text-muted-foreground" />
            </button>
            <button className="p-2 hover:bg-muted rounded">
              <HelpCircle className="w-5 h-5 text-muted-foreground" />
            </button>
            <button className="p-2 hover:bg-muted rounded">
              <div className="w-8 h-8 rounded-full bg-[#0747A6] flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
