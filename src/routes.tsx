import { createBrowserRouter } from 'react-router-dom'

import { NotFound } from './pages/404'
import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { Dashboard } from './pages/app/dashboard/dashboard'
import { Orders } from './pages/app/orders/orders'
import { SignIn } from './pages/auth/sigin'
import { SignUp } from './pages/auth/signup'
import { Error } from './pages/error'

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    element: <AppLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },

  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/signup', element: <SignUp /> },
    ],
  },
  { path: '*', element: <NotFound /> },
])
