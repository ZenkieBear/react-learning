// default-import
import Gallery from "./Gallery";
// named-import, we use named-import to import named-export component.
import { Profile } from "./Gallery";

export default function App() {
  return (
    <>
      {/* <Gallery /> */}
      <Profile />
    </>
  );
}