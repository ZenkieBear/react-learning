import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import Root, {
  loader as rootLoader,
  action as rootAction
} from './routes/root'
import ErrorPage from './error-page'
import Contact, {
  action as contactAction,
  loader as contactLoader
} from './routes/contact'
import EditContact, { action as editAction } from './routes/edit'
import { action as destroyAction } from './routes/destroy'
import Index from './routes'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     // element: <div>Hello World</div>,
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     loader: rootLoader,
//     action: rootAction,
//     children: [
//       {
//         errorElement: <ErrorPage />,
//         children: [
//           {
//             index: true, element: <Index />
//           },
//           {
//             path: 'contacts/:contactId',
//             element: <Contact />,
//             action: contactAction,
//             loader: contactLoader,
//           },
//           {
//             path: 'contacts/:contactId/edit',
//             element: <EditContact />,
//             loader: contactLoader, // There’s no reason to attempt to share loaders among routes, they usually have their own.
//             action: editAction
//           },
//           {
//             path: 'contacts/:contactId/destroy',
//             action: destroyAction,
//           },
//         ]
//       }
//       // {
//       //   index: true, element: <Index />
//       // },
//       // {
//       //   path: 'contacts/:contactId',
//       //   element: <Contact />,
//       //   action: contactAction,
//       //   loader: contactLoader,
//       // },
//       // {
//       //   path: 'contacts/:contactId/edit',
//       //   element: <EditContact />,
//       //   loader: contactLoader, // There’s no reason to attempt to share loaders among routes, they usually have their own.
//       //   action: editAction
//       // },
//       // {
//       //   path: 'contacts/:contactId/destroy',
//       //   action: destroyAction,
//       //   errorElement: <div>Oops! There was an error.</div>
//       // },
//     ]
//   },
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Root />}
      errorElement={<ErrorPage />}
      loader={rootLoader}
      action={rootAction}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index={true} element={<Index />}/>
        <Route
          path='contacts/:contactId'
          element={<Contact />}
          action={contactAction}
          loader={contactLoader}
        />
        <Route
          path='contacts/:contactId/edit'
          element={<EditContact />}
          loader={contactLoader} // Don’t share loader between routes
          action={editAction}
        />
        <Route
          path='contacts/:contactId/destroy'
          action={destroyAction}
        />
      </Route>
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
