# Sharing State Between Components
- When you want to coordinate two components, move thier state to thier common parent.
- Then pass the information down through `props` from thier common parent.
- Finally, pass the event handler down so that the children can change the parent's state.
- It's useful to consider components as “controlled” (driven by *props*) or “uncontrolled” (driven by state).
