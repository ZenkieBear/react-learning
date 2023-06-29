- Declarative programming means describing the UI for each visual state rather than micromanaging the UI (imperative).
- When developing a component:
  1. Identify all its visual states.
  2. Determine the hunman and computer triggers for state change.
  3. Model the state with `useState`.
  4. Remove non-essential state to avoid bugs and paradoxes.
  5. Connect the event handlers to set state.