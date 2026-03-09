import { Link } from "react-router";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { TrendingUp, AlertCircle, CheckCircle2, Clock } from "lucide-react";

const issueStatusData = [
  { name: "To Do", value: 24, color: "#6B7280" },
  { name: "In Progress", value: 18, color: "#0747A6" },
  { name: "In Review", value: 12, color: "#F59E0B" },
  { name: "Done", value: 45, color: "#10B981" },
];

const velocityData = [
  { sprint: "Sprint 1", completed: 32, planned: 35 },
  { sprint: "Sprint 2", completed: 28, planned: 30 },
  { sprint: "Sprint 3", completed: 35, planned: 32 },
  { sprint: "Sprint 4", completed: 38, planned: 40 },
  { sprint: "Sprint 5", completed: 42, planned: 40 },
];

const burndownData = [
  { day: "Day 1", remaining: 120 },
  { day: "Day 2", remaining: 112 },
  { day: "Day 3", remaining: 105 },
  { day: "Day 4", remaining: 98 },
  { day: "Day 5", remaining: 88 },
  { day: "Day 6", remaining: 82 },
  { day: "Day 7", remaining: 75 },
];

const recentIssues = [
  { id: "PROJ-123", title: "Fix login authentication bug", status: "In Progress", priority: "High", assignee: "John Doe" },
  { id: "PROJ-124", title: "Update user profile page design", status: "To Do", priority: "Medium", assignee: "Jane Smith" },
  { id: "PROJ-125", title: "Implement dark mode feature", status: "In Review", priority: "Low", assignee: "Mike Johnson" },
  { id: "PROJ-126", title: "Optimize database queries", status: "Done", priority: "High", assignee: "Sarah Williams" },
  { id: "PROJ-127", title: "Add export functionality", status: "In Progress", priority: "Medium", assignee: "Tom Brown" },
];

export function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your project overview.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-border rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-muted-foreground">Total Issues</span>
            <TrendingUp className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-3xl font-semibold">99</div>
          <p className="text-sm text-muted-foreground mt-1">+12% from last sprint</p>
        </div>

        <div className="bg-white border border-border rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-muted-foreground">In Progress</span>
            <Clock className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-3xl font-semibold">18</div>
          <p className="text-sm text-muted-foreground mt-1">Active this sprint</p>
        </div>

        <div className="bg-white border border-border rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-muted-foreground">Completed</span>
            <CheckCircle2 className="w-4 h-4 text-green-600" />
          </div>
          <div className="text-3xl font-semibold">45</div>
          <p className="text-sm text-muted-foreground mt-1">78% of planned work</p>
        </div>

        <div className="bg-white border border-border rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-muted-foreground">Blocked</span>
            <AlertCircle className="w-4 h-4 text-red-600" />
          </div>
          <div className="text-3xl font-semibold">3</div>
          <p className="text-sm text-muted-foreground mt-1">Need attention</p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Issue Status Distribution */}
        <div className="bg-white border border-border rounded-lg p-6">
          <h3 className="mb-4">Issue Status Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={issueStatusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {issueStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Sprint Velocity */}
        <div className="bg-white border border-border rounded-lg p-6">
          <h3 className="mb-4">Sprint Velocity</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={velocityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="sprint" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="completed" fill="#0747A6" name="Completed" />
              <Bar dataKey="planned" fill="#E0E0E0" name="Planned" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Burndown Chart */}
      <div className="bg-white border border-border rounded-lg p-6">
        <h3 className="mb-4">Sprint Burndown</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={burndownData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="remaining" stroke="#0747A6" strokeWidth={2} name="Remaining Work" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Issues */}
      <div className="bg-white border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3>Recent Issues</h3>
          <Link to="/issues" className="text-sm text-[#0747A6] hover:underline">
            View all
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Key</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Summary</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Status</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Priority</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Assignee</th>
              </tr>
            </thead>
            <tbody>
              {recentIssues.map((issue) => (
                <tr key={issue.id} className="border-b border-border hover:bg-muted/50">
                  <td className="py-3 px-4">
                    <Link to={`/issues/${issue.id}`} className="text-[#0747A6] hover:underline">
                      {issue.id}
                    </Link>
                  </td>
                  <td className="py-3 px-4">{issue.title}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-block px-2 py-1 rounded text-sm ${
                        issue.status === "Done"
                          ? "bg-green-100 text-green-800"
                          : issue.status === "In Progress"
                          ? "bg-blue-100 text-blue-800"
                          : issue.status === "In Review"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {issue.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-block px-2 py-1 rounded text-sm ${
                        issue.priority === "High"
                          ? "bg-red-100 text-red-800"
                          : issue.priority === "Medium"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {issue.priority}
                    </span>
                  </td>
                  <td className="py-3 px-4">{issue.assignee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
