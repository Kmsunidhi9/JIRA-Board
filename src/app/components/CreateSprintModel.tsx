import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

interface CreateSprintModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateSprintModal({ open, onOpenChange }: CreateSprintModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    goal: "",
    startDate: "",
    endDate: "",
    duration: "2",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Sprint created successfully!");
    onOpenChange(false);
    setFormData({ name: "", goal: "", startDate: "", endDate: "", duration: "2" });
  };

  const handleDurationChange = (weeks: string) => {
    setFormData({ ...formData, duration: weeks });
    if (formData.startDate) {
      const start = new Date(formData.startDate);
      const end = new Date(start);
      end.setDate(end.getDate() + parseInt(weeks) * 7);
      setFormData({ ...formData, duration: weeks, endDate: end.toISOString().split('T')[0] });
    }
  };

  const handleStartDateChange = (date: string) => {
    setFormData({ ...formData, startDate: date });
    if (formData.duration) {
      const start = new Date(date);
      const end = new Date(start);
      end.setDate(end.getDate() + parseInt(formData.duration) * 7);
      setFormData({ ...formData, startDate: date, endDate: end.toISOString().split('T')[0] });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create Sprint</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="sprint-name">Sprint Name *</Label>
            <Input
              id="sprint-name"
              placeholder="e.g., Sprint 6"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="sprint-duration">Duration (weeks) *</Label>
            <div className="flex gap-2">
              {["1", "2", "3", "4"].map((week) => (
                <button
                  key={week}
                  type="button"
                  onClick={() => handleDurationChange(week)}
                  className={`flex-1 px-4 py-2 rounded border transition-colors ${
                    formData.duration === week
                      ? "bg-[#0747A6] text-white border-[#0747A6]"
                      : "bg-white text-foreground border-input hover:bg-muted"
                  }`}
                >
                  {week} {week === "1" ? "week" : "weeks"}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="sprint-start">Start Date *</Label>
              <Input
                id="sprint-start"
                type="date"
                value={formData.startDate}
                onChange={(e) => handleStartDateChange(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="sprint-end">End Date *</Label>
              <Input
                id="sprint-end"
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sprint-goal">Sprint Goal</Label>
            <Textarea
              id="sprint-goal"
              placeholder="What do you want to achieve in this sprint?"
              value={formData.goal}
              onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
              rows={4}
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Create Sprint</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
