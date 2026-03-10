import { Link } from "react-router";
import { Mail, ArrowLeft } from "lucide-react";
import { useState } from "react";

export function ForgotPassword() {
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailSent(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0747A6] to-[#0052CC] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0747A6] rounded-lg mb-4">
              <span className="text-white text-2xl font-bold">J</span>
            </div>
            <h1 className="mb-2">Forgot Password?</h1>
            <p className="text-muted-foreground">
              {emailSent
                ? "Check your email for reset instructions"
                : "No worries, we'll send you reset instructions"}
            </p>
          </div>

          {!emailSent ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full pl-10 pr-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-[#0747A6]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-[#0747A6] text-white rounded hover:bg-[#0747A6]/90 transition-colors"
              >
                Reset Password
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-green-800 mb-1">Email Sent Successfully</h4>
                    <p className="text-sm text-green-700">
                      We've sent a password reset link to your email address. Please check your inbox and
                      follow the instructions to reset your password.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-sm text-muted-foreground bg-muted/30 rounded-lg p-4">
                <p className="mb-2">Didn't receive the email?</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Check your spam folder</li>
                  <li>Verify you entered the correct email address</li>
                  <li>Wait a few minutes and check again</li>
                </ul>
              </div>

              <button
                onClick={() => setEmailSent(false)}
                className="w-full py-2 border border-border rounded hover:bg-muted transition-colors"
              >
                Try Another Email
              </button>
            </div>
          )}

          <div className="mt-6">
            <Link
              to="/login"
              className="flex items-center justify-center gap-2 text-sm text-[#0747A6] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Sign In
            </Link>
          </div>

          {!emailSent && (
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/signup" className="text-[#0747A6] hover:underline font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          )}
        </div>

        <p className="text-center text-sm text-white/80 mt-6">
          © 2026 Jira Clone. All rights reserved.
        </p>
      </div>
    </div>
  );
}
