/// <reference types='react' />
// Import react's types

// Data types
type Place = {
  [key: number]: PlaceNode
}
type PlaceNode = {
  id: number,
  title: string,
  childIds: number[] | []
}

// Function types
type HandleComplete = (parentId: number, childId: number) => void;
type HandleItemChange = (id: number, e: ChangeEvent<HTMLInputElement>) => void