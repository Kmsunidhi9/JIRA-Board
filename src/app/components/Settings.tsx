import { Save, User, Bell, Shield, Palette, Mail, Globe } from "lucide-react";
import { useState } from "react";

export function Settings() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "appearance", label: "Appearance", icon: Palette },
    { id: "email", label: "Email", icon: Mail },
    { id: "preferences", label: "Preferences", icon: Globe },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white border border-border rounded-lg overflow-hidden">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                  activeTab === tab.id
                    ? "bg-[#0747A6] text-white"
                    : "hover:bg-muted text-foreground"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          {activeTab === "profile" && (
            <div className="bg-white border border-border rounded-lg p-6 space-y-6">
              <div>
                <h3 className="mb-4">Profile Information</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Update your account profile information and email address
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-[#0747A6] flex items-center justify-center text-white text-2xl">
                    JD
                  </div>
                  <div>
                    <button className="px-4 py-2 border border-border rounded hover:bg-muted">
                      Change Avatar
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">First Name</label>
                    <input
                      type="text"
                      defaultValue="John"
                      className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Last Name</label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label className="block mb-2">Job Title</label>
                  <input
                    type="text"
                    defaultValue="Senior Developer"
                    className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label className="block mb-2">Department</label>
                  <input
                    type="text"
                    defaultValue="Engineering"
                    className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div className="pt-4">
                  <button className="px-4 py-2 bg-[#0747A6] text-white rounded hover:bg-[#0747A6]/90 flex items-center gap-2">
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "notifications" && (
            <div className="bg-white border border-border rounded-lg p-6 space-y-6">
              <div>
                <h3 className="mb-4">Notification Preferences</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Choose how you want to be notified about updates
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-border rounded">
                  <div>
                    <h4>Email Notifications</h4>
                    <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </div>

                <div className="flex items-center justify-between p-4 border border-border rounded">
                  <div>
                    <h4>Issue Assignments</h4>
                    <p className="text-sm text-muted-foreground">Get notified when issues are assigned to you</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </div>

                <div className="flex items-center justify-between p-4 border border-border rounded">
                  <div>
                    <h4>Comments and Mentions</h4>
                    <p className="text-sm text-muted-foreground">Get notified when someone mentions you</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </div>

                <div className="flex items-center justify-between p-4 border border-border rounded">
                  <div>
                    <h4>Sprint Updates</h4>
                    <p className="text-sm text-muted-foreground">Receive updates about sprint activities</p>
                  </div>
                  <input type="checkbox" className="w-5 h-5" />
                </div>

                <div className="flex items-center justify-between p-4 border border-border rounded">
                  <div>
                    <h4>Daily Summary</h4>
                    <p className="text-sm text-muted-foreground">Receive a daily summary of your tasks</p>
                  </div>
                  <input type="checkbox" className="w-5 h-5" />
                </div>

                <div className="pt-4">
                  <button className="px-4 py-2 bg-[#0747A6] text-white rounded hover:bg-[#0747A6]/90 flex items-center gap-2">
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="bg-white border border-border rounded-lg p-6 space-y-6">
              <div>
                <h3 className="mb-4">Security Settings</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Manage your account security and authentication
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block mb-2">Current Password</label>
                  <input
                    type="password"
                    className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label className="block mb-2">New Password</label>
                  <input
                    type="password"
                    className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label className="block mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div className="pt-4 pb-4 border-b border-border">
                  <button className="px-4 py-2 bg-[#0747A6] text-white rounded hover:bg-[#0747A6]/90">
                    Update Password
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 border border-border rounded">
                  <div>
                    <h4>Two-Factor Authentication</h4>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <button className="px-4 py-2 border border-border rounded hover:bg-muted">
                    Enable
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 border border-border rounded">
                  <div>
                    <h4>Active Sessions</h4>
                    <p className="text-sm text-muted-foreground">Manage your active login sessions</p>
                  </div>
                  <button className="px-4 py-2 border border-border rounded hover:bg-muted">
                    View
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "appearance" && (
            <div className="bg-white border border-border rounded-lg p-6 space-y-6">
              <div>
                <h3 className="mb-4">Appearance Settings</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Customize how the application looks
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block mb-2">Theme</label>
                  <select className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>Light</option>
                    <option>Dark</option>
                    <option>System</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2">Sidebar Position</label>
                  <select className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>Left</option>
                    <option>Right</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2">Density</label>
                  <select className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>Comfortable</option>
                    <option>Compact</option>
                    <option>Spacious</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button className="px-4 py-2 bg-[#0747A6] text-white rounded hover:bg-[#0747A6]/90 flex items-center gap-2">
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "email" && (
            <div className="bg-white border border-border rounded-lg p-6 space-y-6">
              <div>
                <h3 className="mb-4">Email Settings</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Configure email notifications and preferences
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block mb-2">Email Frequency</label>
                  <select className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>Real-time</option>
                    <option>Daily Digest</option>
                    <option>Weekly Digest</option>
                    <option>Never</option>
                  </select>
                </div>

                <div className="flex items-center justify-between p-4 border border-border rounded">
                  <div>
                    <h4>Issue Created</h4>
                    <p className="text-sm text-muted-foreground">Email when a new issue is created</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </div>

                <div className="flex items-center justify-between p-4 border border-border rounded">
                  <div>
                    <h4>Issue Updated</h4>
                    <p className="text-sm text-muted-foreground">Email when an issue is updated</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </div>

                <div className="flex items-center justify-between p-4 border border-border rounded">
                  <div>
                    <h4>Sprint Started</h4>
                    <p className="text-sm text-muted-foreground">Email when a sprint starts</p>
                  </div>
                  <input type="checkbox" className="w-5 h-5" />
                </div>

                <div className="pt-4">
                  <button className="px-4 py-2 bg-[#0747A6] text-white rounded hover:bg-[#0747A6]/90 flex items-center gap-2">
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "preferences" && (
            <div className="bg-white border border-border rounded-lg p-6 space-y-6">
              <div>
                <h3 className="mb-4">General Preferences</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Customize your general preferences
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block mb-2">Language</label>
                  <select className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                    <option>German</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2">Timezone</label>
                  <select className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>UTC</option>
                    <option>America/New_York</option>
                    <option>Europe/London</option>
                    <option>Asia/Tokyo</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2">Date Format</label>
                  <select className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>MM/DD/YYYY</option>
                    <option>DD/MM/YYYY</option>
                    <option>YYYY-MM-DD</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2">Time Format</label>
                  <select className="w-full p-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>12-hour</option>
                    <option>24-hour</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button className="px-4 py-2 bg-[#0747A6] text-white rounded hover:bg-[#0747A6]/90 flex items-center gap-2">
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
