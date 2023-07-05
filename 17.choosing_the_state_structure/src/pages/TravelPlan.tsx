import { useState } from "react";
import { useImmer } from "use-immer";
import { initialTravelPlan } from "./places";

function PlaceTree({id, placesById, parentId, onComplete}: {
  id: number,
  placesById: Place
  parentId: number,
  onComplete: HandleComplete
}) {
  const place = placesById[id];
  const childIds = place.childIds;

  return (
    <li>
      {place.title}
      <button onClick={() => onComplete(parentId, id)}>Complete</button>
      {childIds.length > 0 && (
        <ol>
          {childIds.map(childId => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              placesById={placesById}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </li>
  )
}

// If the state is too nested to update easily, consider making it “flat”.
export default function TravelPlan() {
  // const [plan, setPlan] = useState(initialTravelPlan);
  const [plan, updatePlan] = useImmer(initialTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;
  
  const handleComplete: HandleComplete = function (parentId, childId) {
    // const parent = plan[parentId];
    // // Make a copy, exclude childId
    // const nextParent = {
    //   ...parent,
    //   childIds: parent.childIds.filter(id => id !== childId)
    // }
    // // Update
    // setPlan({
    //   ...plan,
    //   [parentId]: nextParent
    // });

    /*
     * Ideally, you would also remove the deleted items (and their children!) from the “table” object to improve memory usage. 
     */
    updatePlan(draft => {
      const parent = draft[parentId];
      // Remove from parent node
      parent.childIds = parent.childIds.filter(id => id !== childId);

      // Delete children
      deleteAllChildren(childId);
      function deleteAllChildren(id: number) {
        const place = draft[id];
        place.childIds.forEach(deleteAllChildren);
        delete draft[id];
      }
    })
  }

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {
          planetIds.map(id => (
            <PlaceTree
              key={id}
              id={id}
              parentId={0}
              placesById={plan}
              onComplete={handleComplete}
            />
          ))
        }
      </ol>
    </>
  )
}