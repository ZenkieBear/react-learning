# Responding to Events
- You can handle events by passing a function as prop to an element like `<button>`.
- Event handler function must be passed, not function calls! `onClick={handleClick}`, not `onClick={handleClick()}`.
- You can define an event handler function spearately or inline.
- Event handlers are defined inside a component, so they can access props.
- You can declare an event handler in a parent component and pass it as a prop to a child.
- You can define you own event handler props with application-specific names.
- Events propagate upwards. Call `e.stopPropagation()` to prevent that.
- Events may have unwanted default browser behavior. Call `e.preventDefault()` to prevent that.
- Explicity calling an event handler prop from a child handler is a goot alternative to propagation.