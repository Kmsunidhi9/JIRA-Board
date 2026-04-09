import { Outlet, Link, useLocation, useNavigate } from "react-router";
import { LayoutDashboard, FolderKanban, ListTodo, BarChart3, Settings, Search, Bell, HelpCircle, User, Plus, ChevronDown, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";
import { CreateProjectModal } from "./CreateProjectModel";
import { CreateIssueModal } from "./CreateIssueModel";
import { CreateSprintModal } from "./CreateSprintModel";
import { Button } from "./ui/button";
import { Toaster } from "./ui/sonner";

export function RootLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showIssueModal, setShowIssueModal] = useState(false);
  const [showSprintModal, setShowSprintModal] = useState(false);
  const [showCreateMenu, setShowCreateMenu] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

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
      {/* Mobile Sidebar Overlay */}
      {showMobileSidebar && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setShowMobileSidebar(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`w-64 bg-[#0747A6] text-white flex flex-col fixed lg:static inset-y-0 left-0 z-50 transform transition-transform duration-200 ease-in-out ${
        showMobileSidebar ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-[#0747A6] font-bold">J</span>
              </div>
              <span className="font-semibold">Jira Clone</span>
            </div>
            <button
              onClick={() => setShowMobileSidebar(false)}
              className="lg:hidden p-1 hover:bg-white/10 rounded"
            >
              <X className="w-5 h-5" />
            </button>
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
              onClick={() => setShowMobileSidebar(false)}
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
          <button
            onClick={() => setShowIssueModal(true)}
            className="flex items-center gap-2 text-sm text-white/80 hover:text-white"
          >
            <Plus className="w-4 h-4" />
            <span>Create Issue</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="h-14 border-b border-border bg-white flex items-center justify-between px-4 md:px-6 gap-2 md:gap-4">
          <div className="flex items-center gap-2 md:gap-4 flex-1 max-w-2xl">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileSidebar(true)}
              className="lg:hidden p-2 hover:bg-muted rounded -ml-2"
            >
              <Menu className="w-5 h-5 text-muted-foreground" />
            </button>

            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search issues..."
                className="w-full pl-10 pr-4 py-2 bg-input-background rounded border-0 focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            {/* Create Button Dropdown */}
            <div className="relative">
              <Button
                onClick={() => setShowCreateMenu(!showCreateMenu)}
                className="bg-[#0747A6] hover:bg-[#0747A6]/90 text-white hidden sm:flex"
                size="sm"
              >
                <Plus className="w-4 h-4 mr-1" />
                Create
              </Button>

              {/* Mobile Create Button */}
              <button
                onClick={() => setShowCreateMenu(!showCreateMenu)}
                className="sm:hidden p-2 hover:bg-muted rounded"
              >
                <Plus className="w-5 h-5 text-muted-foreground" />
              </button>

              {showCreateMenu && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowCreateMenu(false)}
                  />
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-border rounded-lg shadow-lg z-20 overflow-hidden">
                    <button
                      onClick={() => {
                        setShowProjectModal(true);
                        setShowCreateMenu(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors text-left"
                    >
                      <FolderKanban className="w-4 h-4 text-muted-foreground" />
                      <span>Create Project</span>
                    </button>
                    <button
                      onClick={() => {
                        setShowIssueModal(true);
                        setShowCreateMenu(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors text-left"
                    >
                      <ListTodo className="w-4 h-4 text-muted-foreground" />
                      <span>Create Issue</span>
                    </button>
                    <button
                      onClick={() => {
                        setShowSprintModal(true);
                        setShowCreateMenu(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors text-left"
                    >
                      <BarChart3 className="w-4 h-4 text-muted-foreground" />
                      <span>Create Sprint</span>
                    </button>
                  </div>
                </>
              )}
            </div>
            <button className="p-2 hover:bg-muted rounded">
              <Bell className="w-5 h-5 text-muted-foreground" />
            </button>
            <button className="p-2 hover:bg-muted rounded">
              <HelpCircle className="w-5 h-5 text-muted-foreground" />
            </button>
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="p-2 hover:bg-muted rounded"
              >
                <div className="w-8 h-8 rounded-full bg-[#0747A6] flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              </button>

              {showUserMenu && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowUserMenu(false)}
                  />
                  <div className="absolute right-0 mt-2 w-56 bg-white border border-border rounded-lg shadow-lg z-20 overflow-hidden">
                    <div className="p-3 border-b border-border">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#0747A6] flex items-center justify-center text-white">
                          JD
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">John Doe</p>
                          <p className="text-sm text-muted-foreground truncate">john.doe@example.com</p>
                        </div>
                      </div>
                    </div>
                    <div className="py-1">
                      <Link
                        to="/settings"
                        onClick={() => setShowUserMenu(false)}
                        className="flex items-center gap-3 px-4 py-2 hover:bg-muted transition-colors"
                      >
                        <Settings className="w-4 h-4 text-muted-foreground" />
                        <span>Settings</span>
                      </Link>
                      <button
                        onClick={() => {
                          setShowUserMenu(false);
                          navigate("/login");
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2 hover:bg-muted transition-colors text-left text-red-600"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>

      {/* Modals */}
      <CreateProjectModal open={showProjectModal} onOpenChange={setShowProjectModal} />
      <CreateIssueModal open={showIssueModal} onOpenChange={setShowIssueModal} />
      <CreateSprintModal open={showSprintModal} onOpenChange={setShowSprintModal} />

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}
