# Manipulating the DOM with Refs
- Refs are a generic concept, but most often you’ll use them to hold DOM elements.
- You instruct React to put a DOM node into `myRef.current` by passing `<div ref={myRef}>`.
- Usually, you will use refs for non-destructive actions like focusing, scrolling, or measuring DOM elements.
- A component dosen’t expose its DOM nodes by default. You can opt into exposing a DOM node by using `forwardRef` and passing the second `ref` argument down to specific node.
- Avoid changing DOM nodes managed by React.
- If you modify DOM nodes managed by React, modify parts that React has no reason to update.