import { Link } from "react-router";
import { Plus, Filter, ArrowUp, ArrowDown, Minus, Search } from "lucide-react";

const issues = [
  {
    id: "PROJ-123",
    title: "Fix login authentication bug",
    status: "In Progress",
    priority: "High",
    assignee: "John Doe",
    reporter: "Sarah Williams",
    created: "2 days ago",
    updated: "2 hours ago",
    type: "Bug",
  },
  {
    id: "PROJ-124",
    title: "Update user profile page design",
    status: "To Do",
    priority: "Medium",
    assignee: "Jane Smith",
    reporter: "Mike Johnson",
    created: "3 days ago",
    updated: "1 day ago",
    type: "Story",
  },
  {
    id: "PROJ-125",
    title: "Implement dark mode feature",
    status: "In Review",
    priority: "Low",
    assignee: "Mike Johnson",
    reporter: "John Doe",
    created: "5 days ago",
    updated: "3 hours ago",
    type: "Story",
  },
  {
    id: "PROJ-126",
    title: "Optimize database queries",
    status: "Done",
    priority: "High",
    assignee: "Sarah Williams",
    reporter: "Emily Davis",
    created: "1 week ago",
    updated: "1 day ago",
    type: "Task",
  },
  {
    id: "PROJ-127",
    title: "Add export functionality",
    status: "In Progress",
    priority: "Medium",
    assignee: "Tom Brown",
    reporter: "Jane Smith",
    created: "4 days ago",
    updated: "5 hours ago",
    type: "Story",
  },
  {
    id: "PROJ-128",
    title: "Write API documentation",
    status: "To Do",
    priority: "Low",
    assignee: "Emily Davis",
    reporter: "Tom Brown",
    created: "6 days ago",
    updated: "2 days ago",
    type: "Task",
  },
  {
    id: "PROJ-129",
    title: "Fix mobile responsive issues",
    status: "In Review",
    priority: "High",
    assignee: "Chris Martin",
    reporter: "Sarah Williams",
    created: "3 days ago",
    updated: "4 hours ago",
    type: "Bug",
  },
  {
    id: "PROJ-130",
    title: "Implement email notifications",
    status: "To Do",
    priority: "Medium",
    assignee: "Alex Turner",
    reporter: "John Doe",
    created: "1 week ago",
    updated: "3 days ago",
    type: "Story",
  },
];

function getPriorityIcon(priority: string) {
  switch (priority) {
    case "High":
      return <ArrowUp className="w-4 h-4 text-red-600" />;
    case "Low":
      return <ArrowDown className="w-4 h-4 text-blue-600" />;
    default:
      return <Minus className="w-4 h-4 text-orange-600" />;
  }
}

export function Issues() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">Issues</h1>
          <p className="text-muted-foreground">View and manage all project issues</p>
        </div>
        <button className="px-4 py-2 bg-[#0747A6] text-white rounded hover:bg-[#0747A6]/90 flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create Issue
        </button>
      </div>

      <div className="bg-white border border-border rounded-lg p-4">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search issues by summary, description, or key..."
              className="w-full pl-10 pr-4 py-2 bg-input-background rounded border-0 focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button className="px-4 py-2 border border-border rounded hover:bg-muted flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>
      </div>

      <div className="bg-white border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Type</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Key</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Summary</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Status</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Priority</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Assignee</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Reporter</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Created</th>
                <th className="text-left py-3 px-4 text-muted-foreground font-medium">Updated</th>
              </tr>
            </thead>
            <tbody>
              {issues.map((issue) => (
                <tr key={issue.id} className="border-b border-border hover:bg-muted/30">
                  <td className="py-3 px-4">
                    <span
                      className={`inline-block px-2 py-1 rounded text-xs ${
                        issue.type === "Bug"
                          ? "bg-red-100 text-red-800"
                          : issue.type === "Story"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {issue.type}
                    </span>
                  </td>
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
                    <div className="flex items-center gap-2">
                      {getPriorityIcon(issue.priority)}
                      <span>{issue.priority}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">{issue.assignee}</td>
                  <td className="py-3 px-4">{issue.reporter}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{issue.created}</td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{issue.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>Showing {issues.length} of {issues.length} issues</span>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border border-border rounded hover:bg-muted disabled:opacity-50" disabled>
            Previous
          </button>
          <span>Page 1 of 1</span>
          <button className="px-3 py-1 border border-border rounded hover:bg-muted disabled:opacity-50" disabled>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
