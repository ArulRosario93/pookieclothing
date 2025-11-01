import { createFileRoute } from '@tanstack/react-router'
import ProductPage from '../Pages/ProductPage/ProductPage'

export const Route = createFileRoute('/product')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ProductPage />
}
