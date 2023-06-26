# Summary
- Setting state dosen't change the variable in the existing render, but it requests a new render.
- React processing state updates after event handlers finished running. This is called batching.
- To update some state multiple times in one event, you can use `setNumber(n => n + 1)` updater function.