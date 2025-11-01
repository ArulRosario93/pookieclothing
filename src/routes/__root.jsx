
// src/routes/__root.jsx
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import NavBar from "../Components/NavBar/NavBar.jsx";
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar />
      <Outlet />
    </>
  ),
});

