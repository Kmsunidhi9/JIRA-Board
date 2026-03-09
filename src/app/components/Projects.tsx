import { Plus, MoreHorizontal, Users, CheckCircle2, Clock } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Project Alpha",
    key: "PROJ",
    description: "Main product development project",
    lead: "John Doe",
    members: 8,
    issues: { total: 99, done: 45, inProgress: 18 },
    category: "Software",
    lastUpdated: "2 hours ago",
  },
  {
    id: 2,
    name: "Marketing Website",
    key: "MKTG",
    description: "Company marketing website redesign",
    lead: "Jane Smith",
    members: 5,
    issues: { total: 42, done: 28, inProgress: 8 },
    category: "Marketing",
    lastUpdated: "5 hours ago",
  },
  {
    id: 3,
    name: "Mobile App",
    key: "MOBL",
    description: "iOS and Android mobile application",
    lead: "Mike Johnson",
    members: 12,
    issues: { total: 156, done: 89, inProgress: 34 },
    category: "Software",
    lastUpdated: "1 day ago",
  },
  {
    id: 4,
    name: "Infrastructure",
    key: "INFRA",
    description: "DevOps and infrastructure improvements",
    lead: "Sarah Williams",
    members: 6,
    issues: { total: 67, done: 52, inProgress: 9 },
    category: "Operations",
    lastUpdated: "3 hours ago",
  },
];

export function Projects() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2">Projects</h1>
          <p className="text-muted-foreground">Manage and view all your projects</p>
        </div>
        <button className="px-4 py-2 bg-[#0747A6] text-white rounded hover:bg-[#0747A6]/90 flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create Project
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-[#0747A6] rounded flex items-center justify-center text-white font-semibold">
                  {project.key}
                </div>
                <div>
                  <h3 className="mb-1">{project.name}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
              </div>
              <button className="p-2 hover:bg-muted rounded">
                <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Project Lead</span>
                <span className="font-medium">{project.lead}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  Team Members
                </span>
                <span className="font-medium">{project.members}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Category</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">{project.category}</span>
              </div>
            </div>

            <div className="border-t border-border pt-4 space-y-3">
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">
                    {Math.round((project.issues.done / project.issues.total) * 100)}%
                  </span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#0747A6]"
                    style={{ width: `${(project.issues.done / project.issues.total) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1 text-green-600">
                    <CheckCircle2 className="w-4 h-4" />
                    {project.issues.done} Done
                  </span>
                  <span className="flex items-center gap-1 text-blue-600">
                    <Clock className="w-4 h-4" />
                    {project.issues.inProgress} In Progress
                  </span>
                </div>
              </div>

              <div className="text-xs text-muted-foreground">Updated {project.lastUpdated}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
