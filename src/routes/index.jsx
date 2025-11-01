import { createFileRoute } from '@tanstack/react-router';
import HomePage from '../Pages/HomePage/HomePage.jsx';

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <HomePage />
}
