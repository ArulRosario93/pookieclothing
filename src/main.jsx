// src/main.jsx (or App.jsx)

import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';

// The auto-generated file that glues the routes together
import { routeTree } from './routeTree.gen.js';

// Create a new router instance
const router = createRouter({ routeTree });

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      {/* This component makes the router available to your app */}
      <RouterProvider router={router} />
    </StrictMode>,
  );
}