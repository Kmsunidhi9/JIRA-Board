import { GripVertical, Plus, MoreHorizontal, ArrowUp, ArrowDown, Minus } from "lucide-react";

const columns = [
  { id: "todo", title: "To Do", color: "#6B7280" },
  { id: "inprogress", title: "In Progress", color: "#0747A6" },
  { id: "review", title: "In Review", color: "#F59E0B" },
  { id: "done", title: "Done", color: "#10B981" },
];

const issues = [
  {
    id: "PROJ-123",
    title: "Fix login authentication bug",
    status: "inprogress",
    priority: "high",
    assignee: { name: "John Doe", avatar: "JD" },
    labels: ["bug", "backend"],
  },
  {
    id: "PROJ-124",
    title: "Update user profile page design",
    status: "todo",
    priority: "medium",
    assignee: { name: "Jane Smith", avatar: "JS" },
    labels: ["design", "frontend"],
  },
  {
    id: "PROJ-125",
    title: "Implement dark mode feature",
    status: "review",
    priority: "low",
    assignee: { name: "Mike Johnson", avatar: "MJ" },
    labels: ["feature", "ui"],
  },
  {
    id: "PROJ-126",
    title: "Optimize database queries",
    status: "done",
    priority: "high",
    assignee: { name: "Sarah Williams", avatar: "SW" },
    labels: ["performance", "backend"],
  },
  {
    id: "PROJ-127",
    title: "Add export functionality",
    status: "inprogress",
    priority: "medium",
    assignee: { name: "Tom Brown", avatar: "TB" },
    labels: ["feature"],
  },
  {
    id: "PROJ-128",
    title: "Write API documentation",
    status: "todo",
    priority: "low",
    assignee: { name: "Emily Davis", avatar: "ED" },
    labels: ["documentation"],
  },
  {
    id: "PROJ-129",
    title: "Fix mobile responsive issues",
    status: "review",
    priority: "high",
    assignee: { name: "Chris Martin", avatar: "CM" },
    labels: ["bug", "frontend"],
  },
  {
    id: "PROJ-130",
    title: "Implement email notifications",
    status: "todo",
    priority: "medium",
    assignee: { name: "Alex Turner", avatar: "AT" },
    labels: ["feature", "backend"],
  },
];

function getPriorityIcon(priority: string) {
  switch (priority) {
    case "high":
      return <ArrowUp className="w-4 h-4 text-red-600" />;
    case "low":
      return <ArrowDown className="w-4 h-4 text-blue-600" />;
    default:
      return <Minus className="w-4 h-4 text-orange-600" />;
  }
}

export function Board() {
  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-border bg-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-2">Board</h1>
            <p className="text-muted-foreground">Manage your sprint tasks</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 border border-border rounded hover:bg-muted">
              Group by
            </button>
            <button className="px-4 py-2 bg-[#0747A6] text-white rounded hover:bg-[#0747A6]/90 flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Create Issue
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto p-6 bg-[#F4F5F7]">
        <div className="flex gap-4 h-full min-w-max">
          {columns.map((column) => {
            const columnIssues = issues.filter((issue) => issue.status === column.id);
            return (
              <div key={column.id} className="w-80 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: column.color }} />
                    <h3>
                      {column.title} {columnIssues.length}
                    </h3>
                  </div>
                  <button className="p-1 hover:bg-muted rounded">
                    <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>

                <div className="space-y-3 flex-1 overflow-y-auto">
                  {columnIssues.map((issue) => (
                    <div
                      key={issue.id}
                      className="bg-white border border-border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer group"
                    >
                      <div className="flex items-start gap-2 mb-2">
                        <GripVertical className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                        <div className="flex-1">
                          <p className="mb-2">{issue.title}</p>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {issue.labels.map((label) => (
                              <span
                                key={label}
                                className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs"
                              >
                                {label}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">{issue.id}</span>
                            <div className="flex items-center gap-2">
                              {getPriorityIcon(issue.priority)}
                              <div className="w-6 h-6 rounded-full bg-[#0747A6] flex items-center justify-center text-white text-xs">
                                {issue.assignee.avatar}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <button className="w-full p-3 text-left text-muted-foreground hover:bg-white hover:border hover:border-border rounded-lg transition-all flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Create issue
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
