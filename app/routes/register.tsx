import { useState } from "react";
import { Form, redirect } from "@remix-run/react";
import { json, ActionFunction } from "@remix-run/node";
import { register } from "~/services/auth.server";

export const action: ActionFunction = async ({ request }) => {
  const formData = new URLSearchParams(await request.text());
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  // Validate form data
  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    typeof confirmPassword !== "string"
  ) {
    return json({ error: "Invalid form data" }, { status: 400 });
  }

  if (password !== confirmPassword) {
    return json({ error: "Passwords do not match" }, { status: 400 });
  }

  const sessionToken = await register(email, password);
  if (!sessionToken) {
    return json({ error: "Registration failed" }, { status: 401 });
  }

  return redirect("/", {
    headers: {
      "Set-Cookie": sessionToken,
    },
  });
};

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden">
      <div className="max-w-md w-full space-y-8 bg-green-900 bg-opacity-20 p-8 rounded-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-green-500">
            Create your account
          </h2>
        </div>
        <Form className="mt-8 space-y-6" method="post">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-green-500 placeholder-green-400 text-green-400 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm bg-black"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-green-500 placeholder-green-400 text-green-400 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm bg-black"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-green-500 placeholder-green-400 text-green-400 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm bg-black"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300"
            >
              Register
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
