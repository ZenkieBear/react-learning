import { useContext } from "react";
import { LevelContext } from "./LevelContext";

// Step 3: Provide the context
export default function Section({ children, isFancy = false }: SectionProps) {
// export default function Section({ level, children }: SectionProps) {
// export default function Section({ children }: SectionProps) {
  /*
   * `Sections` could read the `level` from the `Section`, and pass `level + 1` down automatically.
   */
  const level = useContext(LevelContext);

  return (
    <section className={'section' + (isFancy ?
      ' fancy' : '')}>
        
      {/* Wrap them with a context provider to provide the `LevelContext` to them: */}
      {/* <LevelContext.Provider value={level}> */}
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  )
}