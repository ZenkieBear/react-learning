# Reusing Logic with Custom Hooks
- Custom Hooks let you share logic between components.
- Custom Hooks must be named starting with `use` followed by a capital letter.
- Custom Hooks only share stateful logic, not state itself.
- You can pass reactive values from one Hook to another, and they stay up-to-date.
- All Hooks re-run every time your component re-renders.
- The code of your custom Hooks should be pure, like your component’s code.
- Wrap event handlers receive by custom Hooks into Effect Events.
- Don’t create custom Hooks like `useMount`. Keep thier purpose specific.
- It’s up to you how and where to choose the boundaries of your code.