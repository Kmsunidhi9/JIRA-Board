import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    AreaChart,
    Area,
    PieChart,
    Pie,
    Cell,
    Legend,
  } from "recharts";
  import { Download, Calendar } from "lucide-react";
  
  const velocityData = [
    { sprint: "Sprint 8", commitment: 35, completed: 32 },
    { sprint: "Sprint 9", commitment: 30, completed: 28 },
    { sprint: "Sprint 10", commitment: 32, completed: 35 },
    { sprint: "Sprint 11", commitment: 40, completed: 38 },
    { sprint: "Sprint 12", commitment: 40, completed: 42 },
  ];
  
  const cumulativeFlowData = [
    { date: "Week 1", todo: 50, inProgress: 10, review: 5, done: 15 },
    { date: "Week 2", todo: 45, inProgress: 12, review: 8, done: 25 },
    { date: "Week 3", todo: 38, inProgress: 15, review: 10, done: 37 },
    { date: "Week 4", todo: 30, inProgress: 18, review: 12, done: 50 },
    { date: "Week 5", todo: 24, inProgress: 16, review: 10, done: 60 },
  ];
  
  const issueTypeData = [
    { name: "Story", value: 45, color: "#10B981" },
    { name: "Bug", value: 28, color: "#EF4444" },
    { name: "Task", value: 18, color: "#0747A6" },
    { name: "Epic", value: 8, color: "#8B5CF6" },
  ];
  
  const teamPerformanceData = [
    { member: "John Doe", completed: 42, assigned: 45 },
    { member: "Jane Smith", completed: 38, assigned: 40 },
    { member: "Mike Johnson", completed: 35, assigned: 35 },
    { member: "Sarah Williams", completed: 40, assigned: 42 },
    { member: "Tom Brown", completed: 28, assigned: 32 },
  ];
  
  export function Reports() {
    return (
      <div className="p-6 space-y-6">
        
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold mb-2">Reports</h1>
            <p className="text-muted-foreground">
              Track team performance and project metrics
            </p>
          </div>
  
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 border border-border rounded hover:bg-muted flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Last 30 days
            </button>
  
            <button className="px-4 py-2 bg-[#0747A6] text-white rounded hover:bg-[#0747A6]/90 flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>
  
        {/* METRIC CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-border rounded-lg p-6">
            <div className="text-sm text-muted-foreground mb-1">
              Average Velocity
            </div>
            <div className="text-3xl font-semibold mb-1">35.8</div>
            <div className="text-sm text-green-600">+12% from last month</div>
          </div>
  
          <div className="bg-white border border-border rounded-lg p-6">
            <div className="text-sm text-muted-foreground mb-1">
              Completion Rate
            </div>
            <div className="text-3xl font-semibold mb-1">94%</div>
            <div className="text-sm text-green-600">+5% from last month</div>
          </div>
  
          <div className="bg-white border border-border rounded-lg p-6">
            <div className="text-sm text-muted-foreground mb-1">
              Average Cycle Time
            </div>
            <div className="text-3xl font-semibold mb-1">3.2 days</div>
            <div className="text-sm text-red-600">+0.4 days from last month</div>
          </div>
        </div>
  
        {/* VELOCITY CHART */}
        <div className="bg-white border border-border rounded-lg p-6">
          <h3 className="mb-4 font-semibold">Velocity Chart</h3>
  
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={velocityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="sprint" />
              <YAxis />
              <Tooltip />
              <Legend />
  
              <Bar dataKey="commitment" fill="#E0E0E0" name="Commitment" />
              <Bar dataKey="completed" fill="#0747A6" name="Completed" />
            </BarChart>
          </ResponsiveContainer>
        </div>
  
        {/* TWO COLUMN CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* CUMULATIVE FLOW */}
          <div className="bg-white border border-border rounded-lg p-6">
            <h3 className="mb-4 font-semibold">Cumulative Flow Diagram</h3>
  
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={cumulativeFlowData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
  
                <Area
                  type="monotone"
                  dataKey="done"
                  stackId="1"
                  stroke="#10B981"
                  fill="#10B981"
                />
  
                <Area
                  type="monotone"
                  dataKey="review"
                  stackId="1"
                  stroke="#F59E0B"
                  fill="#F59E0B"
                />
  
                <Area
                  type="monotone"
                  dataKey="inProgress"
                  stackId="1"
                  stroke="#0747A6"
                  fill="#0747A6"
                />
  
                <Area
                  type="monotone"
                  dataKey="todo"
                  stackId="1"
                  stroke="#6B7280"
                  fill="#6B7280"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
  
          {/* PIE CHART */}
          <div className="bg-white border border-border rounded-lg p-6">
            <h3 className="mb-4 font-semibold">Issue Type Distribution</h3>
  
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={issueTypeData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {issueTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
  
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
  
        {/* TEAM PERFORMANCE */}
        <div className="bg-white border border-border rounded-lg p-6">
          <h3 className="mb-4 font-semibold">Team Performance</h3>
  
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={teamPerformanceData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="member" type="category" width={120} />
              <Tooltip />
              <Legend />
  
              <Bar dataKey="completed" fill="#0747A6" name="Completed" />
              <Bar dataKey="assigned" fill="#E0E0E0" name="Assigned" />
            </BarChart>
          </ResponsiveContainer>
        </div>
  
        {/* SPRINT SUMMARY TABLE */}
        <div className="bg-white border border-border rounded-lg p-6">
          <h3 className="mb-4 font-semibold">Sprint Summary</h3>
  
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-muted-foreground">
                    Sprint
                  </th>
                  <th className="text-left py-3 px-4 text-muted-foreground">
                    Commitment
                  </th>
                  <th className="text-left py-3 px-4 text-muted-foreground">
                    Completed
                  </th>
                  <th className="text-left py-3 px-4 text-muted-foreground">
                    Completion %
                  </th>
                  <th className="text-left py-3 px-4 text-muted-foreground">
                    Issues Added
                  </th>
                  <th className="text-left py-3 px-4 text-muted-foreground">
                    Issues Removed
                  </th>
                </tr>
              </thead>
  
              <tbody>
                {velocityData.map((sprint, index) => {
                  const completion =
                    (sprint.completed / sprint.commitment) * 100;
  
                  return (
                    <tr
                      key={index}
                      className="border-b border-border hover:bg-muted/50"
                    >
                      <td className="py-3 px-4">{sprint.sprint}</td>
                      <td className="py-3 px-4">{sprint.commitment}</td>
                      <td className="py-3 px-4">{sprint.completed}</td>
  
                      <td className="py-3 px-4">
                        <span
                          className={
                            completion >= 90
                              ? "text-green-600"
                              : completion >= 75
                              ? "text-yellow-600"
                              : "text-red-600"
                          }
                        >
                          {Math.round(completion)}%
                        </span>
                      </td>
  
                      <td className="py-3 px-4">
                        {Math.floor(Math.random() * 5)}
                      </td>
  
                      <td className="py-3 px-4">
                        {Math.floor(Math.random() * 3)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }