# Summary
1. To transfer props, please add them to JSX like using HTML attribute.
2. To read props, please use `function Avatar({ person, size })` deconstructive grammer.
3. You could specify a default-value, like `size = 100`, for props which hasn't value or `undefined` value props.
4. You could use `<Avatar {...props} />` to transfer all props, but don't overuse it.
5. Nested JSX components like `<Card><Avatar /></Card>` will be considered as `Card` components's `children` prop.
6. Props are readonly time snapshots, everytime react rendering, components will get new props.
7. You can't change the props. If you wanna interactiveness, you could set a `state`.