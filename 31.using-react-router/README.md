# Start Using React
> ***Optional: This note is summarized from [React-Router’s tutorial](https://reactrouter.com/en/main/start/tutorial#tutorial), you might not need to learn it.***
> 
> But we still suggest you learnReact Router, it’s useful in your work.

## Intro
*Aug 1, 2023*

This document might not update later. It’s just a note summaried from React Router’s official tutorial. You can treat it like a memorandum, but it’ll be outdated. I would recommend you study React Router from its `official` tutorial more. It won’t be outdated, and it’s more perfect.

## Setup
```sh
npm create vite@latest name-of-your-project -- --template react
# follow prompts
cd <your new project directory>
npm install react-router-dom localforage match-sorter sort-by
npm run dev
```

## Adding a Router

1. Import denpendencies in your `src/main.jsx`.
```js
+import {
+  createBrowserRouter,
+  RouterProvider,
+} from "react-router-dom";
```

2. Create a router
```js
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
```

3. Add `RouterProvider` and pass your *router* in it.
```js
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
+    <RouterProvider router={router} />
  </React.StrictMode>
);
```

## The Root Route
1. Create the root layout component `Root`. It could just be a React component.

2. Set `<Root>` as the root route’s `element`
```js
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);
```

## Handle Not Found Errors
1. Create an error page component `ErrorPage`.
```sh
touch src/error-page.jsx
```

2. Set the `<ErrorPage>` as the `errorElement` on the root route.
```js
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);
```

## Client Side Routing
Change the `<a href>` to `<Link to>`, it makes browser doesn’t send request anymore.

## Nested Routes
1. Move the child route to be a child of the root route.
```js
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);
```
2. Render an `<Outlet>` to show a child route in its parent route as some *element*.


## Loading Data
>URL segments, layouts, and data are more often than not coupled.

1. Export a loader from your *js(x)* file.
```js
export async function loader() {
  const contacts = await getContacts(); // this method will return some data asynchronized.
  return { contacts };
}
```
2. Configure the loader on the route
```diff

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
+    loader: rootLoader,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);
```

3. Access and render the data
   
Use `useLoaderData` hook to get data. When your component loaded by router, the corresponded loader will load the data, and return a obejct. You can get it by calling `useLoaderData` hook, it return the value what loader returns.

## Data Writes + HTML Forms
Instead of sending that POST to the server to create a new data, let’s use client side routing instead.

## Create a Data
1. Create a action and change `<form>` to `<Form>`
```js
export async function action() {
  const contact = await createContact(); // this method will create a data asynchronized
  return { contact };
}
```
2. Import and set the action on the route
```js
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);
```
`<Form>` prevents the browser from sending the request to the server and sends it to your route `action` instead.

## URL Params in Loaders
Reviewing the route config, the route looks like this:
```js
[
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
];
```
Note the `:contactId` URL segments. The colon (`:`) has the special meaning, turning it into a “dynamic segment”.

These `params` are passed to the loader with keys that matched the dynamic segment.

These params are most often used to find a record by ID. Let's try it out.
1. Add a loader to a component and access data with `useLoaderData`
```js
export async function loader({ params }) {
  const contact = await getContact(params.contactId);
  return { contact };
}

export default function Contact() {
  const { contact } = useLoaderData();
  // existing code
}
```
2. Configure the loader on the route
```js
{
  path: "contacts/:contactId",
  element: <Contact />,
  loader: contactLoader,
},
```

## Updating Data
Just like *creating data*, you update data with `<Form>`.
1. Create the edit component
```sh
touch src/routes/edit.jsx
```
2. Add the edit page UI
```js
export default function EditContact() {
  const { contact } = useLoaderData();
  // other handles
}
```
3. Add the new edit route
```js
children: [
  {
    path: "contacts/:contactId",
    element: <Contact />,
    loader: contactLoader,
  },
  {
    path: "contacts/:contactId/edit",
    element: <EditContact />,
    loader: contactLoader,
  },
],
```

## Mutation *Discussion*
Without JavaScript, when a form is submitted, the browser will create `FormData` and set it as the body of the request when it sends it to the server. As mentioned before, React Router prevents that and sends the request to your action instead, including the `FormData`.

Since we have a handful of form fields, we used `Object.fromEntries` to collect them all into an object, which is exactly what our updateContact function wants.

Aside from action, none of these APIs we're discussing are provided by React Router: `request`, `request.formData`, `Object.fromEntries` are all provided by the web platform.

Without client side routing, if a server redirected after a POST request, the new page would fetch the latest data and render. As we learned before, React Router emulates this model and automatically revalidates the data on the page after the action. That's why the sidebar automatically updates when we save the form. The extra revalidation code doesn't exist without client side routing, so it doesn't need to exist with client side routing either!

## Redirecting new records to the edit page
```js
export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}
```

## Active Link Styling
Now that we have a bunch of records, it's not clear which one we're looking at in the sidebar. We can use `NavLink` to fix this.

### Use a NavLink in the sidebar
```js
<NavLink
  to={`contacts/${contact.id}`}
  className={({ isActive, isPending }) =>
    isActive
      ? "active"
      : isPending
      ? "pending"
      : ""
  }
>
  {/* other code */}
</NavLink>
```
Note that we are passing a function to `className`. When the user is at the URL in the NavLink, then isActive will be true.

## Global Pending UI
React Router is managing all of the state behind the scenes and reveals the pieces of it you need to build dynamic web apps. In this case, we'll use the `useNavigation` hook.

### `useNavigation` to add global pending UI
```js
export default function Root() {
  // some handles
  const navigation = useNavigation();

  return (
    <>
      <div id="sidebar">{/* existing code */}</div>
      <div
        id="detail"
        className={
          // ↓↓↓↓↓
          navigation.state === "loading" ? "loading" : ""
        }
      >
        <Outlet />
      </div>
    </>
  );
}
```

## Contextual Errors
Just for kicks, throw an error in the destroy action:
```js
export async function action({ params }) {
  throw new Error("oh dang!");
  await deleteContact(params.contactId);
  return redirect("/");
}
```

Let's create a contextual error message for a child route:
```js
[
  /* other routes */
  {
    path: "contacts/:contactId/destroy",
    action: destroyAction,
    errorElement: <div>Oops! There was an error.</div>,
  },
];
```

## Index Routes
```js
children: [
  { index: true, element: <Index /> },
  /* existing routes */
],
```
Note the `{ index:true }` instead of `{ path: "" }`. That tells the router to match and render this route when the user is at the parent route's exact path, so there are no other child routes to render in the `<Outlet>`.

## Cancel Button
### Add the cancel button click handler with useNavigate
```js
export default function EditContact() {
  const { contact } = useLoaderData();
  const navigate = useNavigate(); // ←
  return (
    <Form method="post" id="contact-form">
      {/* existing code */}

      <p>
        <button type="submit">Save</button>
        <button
          type="button"
          onClick={() => {
            // ↓
            navigate(-1);
          }}
        >
          Cancel
        </button>
      </p>
    </Form>
  );
}
```
Now when the user clicks "Cancel", they'll be sent back one entry in the browser's history.

## Submitting Forms onChange
We've got a product decision to make here. For this UI, we'd probably rather have the filtering happen on every key stroke instead of when the form is explicitly submitted.

We've seen useNavigate already, we'll use its cousin, useSubmit, for this.
```js
// existing code
import {
  // existing code
  useSubmit,
} from "react-router-dom";

export default function Root() {
  const { contacts, q } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
              defaultValue={q}
              onChange={(event) => {
                submit(event.currentTarget.form);
              }}
            />
            {/* existing code */}
          </Form>
          {/* existing code */}
        </div>
        {/* existing code */}
      </div>
      {/* existing code */}
    </>
  );
}
```

## Adding Search Spinner
In a production app, it's likely this search will be looking for records in a database that is too large to send all at once and filter client side. That's why this demo has some faked network latency.

### Add the search spinner
```js
// existing code// existing code

export default function Root() {
  const { contacts, q } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has(
      "q"
    );

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <Form id="search-form" role="search">
            <input
              id="q"
              className={searching ? "loading" : ""}
              // existing code
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={!searching}
            />
            {/* existing code */}
          </Form>
          {/* existing code */}
        </div>
        {/* existing code */}
      </div>
      {/* existing code */}
    </>
  );
}
```
The `navigation.location` will show up when the app is navigating to a new URL and loading the data for it. It then goes away when there is no pending navigation anymore.

## Managing the History Stack
Now that the form is submitted for every key stroke, if we type the characters "seba" and then delete them with backspace, we end up with 7 new entries in the stack.

We can avoid this by replacing the current entry in the history stack with the next page, instead of pushing into it.
### Use `replace` in submit
```js
onChange={(event) => {
  const isFirstSearch = q == null;
  submit(event.currentTarget.form, {
    replace: !isFirstSearch,
  });
}}
```

## Mutations Without Navigation
It’s as common to want to change data without causing a navigation.

For these cases, we have the useFetcher hook. It allows us to communicate with loaders and actions without causing a navigation.

1. Change the <Favorite> form to a fetcher form
```js
import {
  useLoaderData,
  Form,
  useFetcher,
} from "react-router-dom";

// existing code

function Favorite({ contact }) {
  const fetcher = useFetcher();
  let favorite = contact.favorite;

  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
}
```
2. Create the action
```js
// existing code
import { getContact, updateContact } from "../contacts";

export async function action({ request, params }) {
  let formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true",
  });
}

export default function Contact() {
  // existing code
}
```
3. Configure the route's new action
```js
// existing code
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./routes/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index /> },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
        action: contactAction,
      },
      /* existing code */
    ],
  },
]);
```
4. Add an action to the edit module
```js
export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}
```
5. Write the action up to the route
```js
{
  path: "contacts/:contactId/edit",
  element: <EditContact />,
  loader: contactLoader,
  action: editAction,
},
```
Our new <fetcher.Form method="post"> works almost exactly like the <Form> we've been using: it calls the action and then all data is revalidated automatically--even your errors will be caught the same way.

There is one key difference though, it’s not a navigation--the URL doesn't change, the history stack is unaffected.

## Optimistic UI
You probably noticed the app felt kind of *unresponsive* when we clicked the favorite button from the last section. Once again, we added some network latency because you're going to have it in the real world!

To give the user some feedback, we could put the star into a loading state with `fetcher.state` (a lot like navigation.state from before), but we can do something even better this time. We can use a strategy called "optimistic UI"

### Read the optimistic value from fetcher.formData
```js
// existing code

function Favorite({ contact }) {
  const fetcher = useFetcher();

  let favorite = contact.favorite;
  if (fetcher.formData) {
    favorite = fetcher.formData.get("favorite") === "true";
  }

  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
}
```


## Not Found Data
What happens if the contact we're trying to load doesn't exist?

Our root `errorElement` is catching this unexpected error as we try to render a null contact. Nice the error was properly handled, but we can do better!
### Throw a 404 response in the loader
```js
export async function loader({ params }) {
  const contact = await getContact(params.contactId);
  if (!contact) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { contact };
}
```

## Pathless Routes
One last thing. The last error page we saw would be better if it rendered inside the root outlet, instead of the whole page. In fact, every error in all of our child routes would be better in the outlet, then the user has more options than hitting refresh.

We could add the error element to every one of the child routes but, since it's all the same error page, this isn't recommended.

There's a cleaner way. Routes can be used without a path, which lets them participate in the UI layout without requiring new path segments in the URL. Check it out:

### Wrap the child routes in a pathless route
```js
children: [
  {
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
        action: contactAction,
      },
      /* the rest of the routes */
    ],
  },
],
```
When any errors are thrown in the child routes, our new pathless route will catch it and render, preserving the root route's UI!

## JSX Routes
And for our final trick, many folks prefer to configure their routes with JSX. You can do that with `createRoutesFromElements`. There is no functional difference between JSX or objects when configuring your routes, it's simply a stylistic preference.
```js
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />
        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />
        <Route
          path="contacts/:contactId/destroy"
          action={destroyAction}
        />
      </Route>
    </Route>
  )
);
```
