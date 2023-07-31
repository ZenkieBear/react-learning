# Start Using React
> ***Optional: This section from React-Router’s tutorial, you might not need to lookup it.***
> 
> But we still suggest you learnReact Router, it’s useful in your work.

## Some questions
> How do react-router handle actions?

Without JavaScript, when a form is submitted, the browser will create `FormData` and set it as the body of the request when it sends it to the server. As mentioned before, React Router prevents that and sends the request to your ***action*** instead, including the `FormData`.

> What’s the different between `action` and `loader`?

A Get request won’t trigger `action`, but Post will.
