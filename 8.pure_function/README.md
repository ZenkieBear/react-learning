# Keeping Components Pure
- A component must be pure, it means:
  - ***Only responsible for it's own tasks.*** It won't change any variable which already exists before the function has been called.
  - ***Every inputs match the its same output.*** Gaven the same input, the component should always return the same JSX.
- Rendering would happens anytime, so component shouldn't depends on the order of rendering each other.
- You shouldn't change any inputs for rendering. It contains `props`, `state` and `context`. Update the interface by setting `state`, without changing pre-existing objects.
- Strive to express your component logic in the JSX you return. When you need to "change something", you should do it in `Event Handler`. At a last resort, you can use `useEffect`.
- Writing pure function need some practice, but it unleashes the ability of the React paradigm.
