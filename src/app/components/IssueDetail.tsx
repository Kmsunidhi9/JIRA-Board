import { useParams, Link } from "react-router";
import { ArrowLeft, MoreHorizontal, ArrowUp, Link2, Paperclip, Calendar, MessageSquare, Activity } from "lucide-react";

export function IssueDetail() {
  const { id } = useParams();

  return (
    <div className="h-full flex flex-col">
      <div className="border-b border-border bg-white px-6 py-4">
        <div className="flex items-center gap-4">
          <Link to="/issues" className="p-2 hover:bg-muted rounded">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">{id}</span>
              <span className="text-muted-foreground">/</span>
              <h2>Fix login authentication bug</h2>
            </div>
          </div>
          <button className="p-2 hover:bg-muted rounded">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-border rounded-lg p-6">
              <h3 className="mb-4">Description</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Users are experiencing authentication failures when attempting to log in with valid credentials. The issue appears to be intermittent and affects approximately 15% of login attempts.
                </p>
                <p>
                  <strong>Steps to reproduce:</strong>
                </p>
                <ol className="list-decimal list-inside space-y-1 ml-4">
                  <li>Navigate to login page</li>
                  <li>Enter valid username and password</li>
                  <li>Click "Sign In" button</li>
                  <li>Observe error message "Authentication failed"</li>
                </ol>
                <p>
                  <strong>Expected result:</strong> User should be successfully authenticated and redirected to dashboard
                </p>
                <p>
                  <strong>Actual result:</strong> User receives authentication error despite valid credentials
                </p>
              </div>
            </div>

            <div className="bg-white border border-border rounded-lg p-6">
              <h3 className="mb-4">Activity</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#0747A6] flex items-center justify-center text-white text-xs flex-shrink-0">
                    JD
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">John Doe</span>
                      <span className="text-sm text-muted-foreground">2 hours ago</span>
                    </div>
                    <div className="bg-muted/30 rounded p-3">
                      <p>I've identified the issue. The session token validation is failing due to a timezone mismatch between the auth server and database. Working on a fix now.</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#0747A6] flex items-center justify-center text-white text-xs flex-shrink-0">
                    SW
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">Sarah Williams</span>
                      <span className="text-sm text-muted-foreground">5 hours ago</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Changed status from <span className="font-medium">To Do</span> to <span className="font-medium">In Progress</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#0747A6] flex items-center justify-center text-white text-xs flex-shrink-0">
                    SW
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">Sarah Williams</span>
                      <span className="text-sm text-muted-foreground">1 day ago</span>
                    </div>
                    <div className="bg-muted/30 rounded p-3">
                      <p>This is affecting our production users. Marking as high priority and assigning to John for immediate investigation.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#0747A6] flex items-center justify-center text-white text-xs flex-shrink-0">
                    U
                  </div>
                  <div className="flex-1">
                    <textarea
                      placeholder="Add a comment..."
                      className="w-full p-3 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      rows={3}
                    />
                    <div className="flex items-center justify-end gap-2 mt-2">
                      <button className="px-4 py-2 border border-border rounded hover:bg-muted">
                        Cancel
                      </button>
                      <button className="px-4 py-2 bg-[#0747A6] text-white rounded hover:bg-[#0747A6]/90">
                        Comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-border rounded-lg p-6 space-y-4">
              <div>
                <label className="text-sm text-muted-foreground block mb-2">Status</label>
                <select className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>To Do</option>
                  <option selected>In Progress</option>
                  <option>In Review</option>
                  <option>Done</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-muted-foreground block mb-2">Assignee</label>
                <div className="flex items-center gap-2 p-2 border border-border rounded">
                  <div className="w-6 h-6 rounded-full bg-[#0747A6] flex items-center justify-center text-white text-xs">
                    JD
                  </div>
                  <span>John Doe</span>
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground block mb-2">Reporter</label>
                <div className="flex items-center gap-2 p-2">
                  <div className="w-6 h-6 rounded-full bg-[#0747A6] flex items-center justify-center text-white text-xs">
                    SW
                  </div>
                  <span>Sarah Williams</span>
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground block mb-2">Priority</label>
                <div className="flex items-center gap-2 p-2 border border-border rounded">
                  <ArrowUp className="w-4 h-4 text-red-600" />
                  <span>High</span>
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground block mb-2">Labels</label>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">bug</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">backend</span>
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground block mb-2">Sprint</label>
                <div className="p-2">Sprint 12</div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground block mb-2">Story Points</label>
                <input
                  type="number"
                  value="5"
                  className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div className="bg-white border border-border rounded-lg p-6 space-y-4">
              <h4>Details</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Created 2 days ago</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Activity className="w-4 h-4" />
                  <span>Updated 2 hours ago</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MessageSquare className="w-4 h-4" />
                  <span>3 comments</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Paperclip className="w-4 h-4" />
                  <span>0 attachments</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Link2 className="w-4 h-4" />
                  <span>0 links</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
