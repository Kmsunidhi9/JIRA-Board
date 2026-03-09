import { ChevronDown, ChevronRight, Plus, MoreHorizontal, GripVertical, ArrowUp, ArrowDown, Minus, Calendar } from "lucide-react";
import { useState } from "react";

const sprints = [
  {
    id: 1,
    name: "Sprint 12",
    status: "active",
    startDate: "Mar 1, 2026",
    endDate: "Mar 14, 2026",
    issues: [
      {
        id: "PROJ-123",
        title: "Fix login authentication bug",
        priority: "high",
        assignee: { name: "John Doe", avatar: "JD" },
        storyPoints: 5,
        labels: ["bug", "backend"],
      },
      {
        id: "PROJ-127",
        title: "Add export functionality",
        priority: "medium",
        assignee: { name: "Tom Brown", avatar: "TB" },
        storyPoints: 8,
        labels: ["feature"],
      },
      {
        id: "PROJ-129",
        title: "Fix mobile responsive issues",
        priority: "high",
        assignee: { name: "Chris Martin", avatar: "CM" },
        storyPoints: 3,
        labels: ["bug", "frontend"],
      },
    ],
  },
  {
    id: 2,
    name: "Sprint 13",
    status: "future",
    startDate: "Mar 15, 2026",
    endDate: "Mar 28, 2026",
    issues: [
      {
        id: "PROJ-124",
        title: "Update user profile page design",
        priority: "medium",
        assignee: { name: "Jane Smith", avatar: "JS" },
        storyPoints: 5,
        labels: ["design", "frontend"],
      },
      {
        id: "PROJ-128",
        title: "Write API documentation",
        priority: "low",
        assignee: { name: "Emily Davis", avatar: "ED" },
        storyPoints: 3,
        labels: ["documentation"],
      },
    ],
  },
];

const backlogIssues = [
  {
    id: "PROJ-130",
    title: "Implement email notifications",
    priority: "medium",
    assignee: { name: "Alex Turner", avatar: "AT" },
    storyPoints: 5,
    labels: ["feature", "backend"],
  },
  {
    id: "PROJ-131",
    title: "Add multi-language support",
    priority: "low",
    assignee: null,
    storyPoints: 13,
    labels: ["feature", "frontend"],
  },
  {
    id: "PROJ-132",
    title: "Implement analytics dashboard",
    priority: "medium",
    assignee: null,
    storyPoints: 8,
    labels: ["feature", "analytics"],
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

export function Backlog() {
  const [expandedSprints, setExpandedSprints] = useState<number[]>([1]);

  const toggleSprint = (sprintId: number) => {
    setExpandedSprints((prev) =>
      prev.includes(sprintId) ? prev.filter((id) => id !== sprintId) : [...prev, sprintId]
    );
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">Backlog</h1>
          <p className="text-muted-foreground">Plan and prioritize your work</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 border border-border rounded hover:bg-muted">
            Create Sprint
          </button>
          <button className="px-4 py-2 bg-[#0747A6] text-white rounded hover:bg-[#0747A6]/90 flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Create Issue
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {sprints.map((sprint) => {
          const isExpanded = expandedSprints.includes(sprint.id);
          const totalPoints = sprint.issues.reduce((sum, issue) => sum + issue.storyPoints, 0);

          return (
            <div key={sprint.id} className="bg-white border border-border rounded-lg overflow-hidden">
              <div
                className="p-4 bg-muted/30 cursor-pointer hover:bg-muted/50 flex items-center justify-between"
                onClick={() => toggleSprint(sprint.id)}
              >
                <div className="flex items-center gap-3">
                  {isExpanded ? (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  )}
                  <div>
                    <div className="flex items-center gap-2">
                      <h3>{sprint.name}</h3>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          sprint.status === "active"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {sprint.status === "active" ? "Active" : "Future"}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {sprint.startDate} - {sprint.endDate}
                      </span>
                      <span>{sprint.issues.length} issues</span>
                      <span>{totalPoints} story points</span>
                    </div>
                  </div>
                </div>
                <button className="p-2 hover:bg-muted rounded">
                  <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              {isExpanded && (
                <div className="divide-y divide-border">
                  {sprint.issues.map((issue) => (
                    <div
                      key={issue.id}
                      className="p-4 hover:bg-muted/20 cursor-pointer flex items-center gap-3 group"
                    >
                      <GripVertical className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100" />
                      <div className="flex-1 flex items-center gap-4">
                        <span className="text-sm text-muted-foreground w-24">{issue.id}</span>
                        <div className="flex-1">
                          <p className="mb-1">{issue.title}</p>
                          <div className="flex flex-wrap gap-1">
                            {issue.labels.map((label) => (
                              <span
                                key={label}
                                className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs"
                              >
                                {label}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          {getPriorityIcon(issue.priority)}
                          <span className="text-sm text-muted-foreground w-8">{issue.storyPoints}sp</span>
                          <div className="w-6 h-6 rounded-full bg-[#0747A6] flex items-center justify-center text-white text-xs">
                            {issue.assignee.avatar}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="p-3">
                    <button className="w-full p-2 text-left text-muted-foreground hover:bg-muted/20 rounded flex items-center gap-2">
                      <Plus className="w-4 h-4" />
                      Create issue
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <div className="bg-white border border-border rounded-lg">
          <div className="p-4 bg-muted/30">
            <h3>Backlog</h3>
            <p className="text-sm text-muted-foreground mt-1">{backlogIssues.length} issues</p>
          </div>
          <div className="divide-y divide-border">
            {backlogIssues.map((issue) => (
              <div
                key={issue.id}
                className="p-4 hover:bg-muted/20 cursor-pointer flex items-center gap-3 group"
              >
                <GripVertical className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100" />
                <div className="flex-1 flex items-center gap-4">
                  <span className="text-sm text-muted-foreground w-24">{issue.id}</span>
                  <div className="flex-1">
                    <p className="mb-1">{issue.title}</p>
                    <div className="flex flex-wrap gap-1">
                      {issue.labels.map((label) => (
                        <span key={label} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {getPriorityIcon(issue.priority)}
                    <span className="text-sm text-muted-foreground w-8">{issue.storyPoints}sp</span>
                    {issue.assignee ? (
                      <div className="w-6 h-6 rounded-full bg-[#0747A6] flex items-center justify-center text-white text-xs">
                        {issue.assignee.avatar}
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full border-2 border-dashed border-muted-foreground" />
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="p-3">
              <button className="w-full p-2 text-left text-muted-foreground hover:bg-muted/20 rounded flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Create issue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
