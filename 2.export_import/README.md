# Summary
- Use `export` to export a component.
  Use `import` to import a component.
- There're two way to export and import:
  1. Default export(import): `export default function xxx` | `import Compon from './Compo';`
  2. Named export(import). `export function xxx` | `import {Compo} from './File'`;
  
  One file can have only one default export, but multiple named export can be in one file.
  Every file can use multiple `default import` or `named import`.
