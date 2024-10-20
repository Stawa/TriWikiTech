import { createCookieSessionStorage } from "@remix-run/node";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "session",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 1000,
    path: "/",
    sameSite: "lax",
    secrets: [import.meta.env.VITE_SESSION_SECRET!],
    secure: import.meta.env.VITE_NODE_ENV === "production",
  },
});

async function getSession(request: Request) {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );
  return session;
}

async function createSession(userId: string) {
  const session = await sessionStorage.getSession();
  session.set("userId", userId);
  return session;
}

async function commitSession(session: any) {
  return sessionStorage.commitSession(session);
}

async function destroySession(session: any) {
  return sessionStorage.destroySession(session);
}

export { getSession, createSession, commitSession, destroySession };
