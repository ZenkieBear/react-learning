import { createRoot } from 'react-dom/client'
import Gallery from './Gallery';
import Image from './Image';

document.body.innerHTML = '<div id="app"></div>';

const root = createRoot(document.getElementById('app'));

// The first render time
// root.render(<Image />)
root.render(<Gallery />)
// When the first render finished, you can update it state by `set` function to trigger subsequent render.
