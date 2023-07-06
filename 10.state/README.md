# State: A Component's Memory
- Use a state variable when a component needs to "remember" some information between renders.
- State variables are declared by calling the `useState` Hook.
- Hooks are special functions that start with `use`. They let you "hook into" React features like state.
- Hooks might remind you of *imports*: they need to be called unconditionally. Calling Hooks, including `useState`, is only valid at the top of a component or another Hook.
- The `useState` Hook returns a pair of values: the current state and the function to update it.
- You can have more than one state variable. Internally, React matches them up by thier order.
- State is private to the component. If you render it in two places, each copy gets its own state.