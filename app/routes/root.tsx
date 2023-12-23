import { Outlet } from "@remix-run/react";

export function Root() {
  return (
    <>
      <header>
        <h1>remix-payload-blog</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
