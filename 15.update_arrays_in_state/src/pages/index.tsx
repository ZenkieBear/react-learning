import { useState } from "react";
import { useImmer } from "use-immer";

type Artist = {
  id: number,
  name: string
}
let nextId = 0;

/**
 * How to add and remove elements of an array
 */
function List() {
// export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState<Artist[]>([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        // artists.push({
        //   id: nextId++,
        //   name: name
        // });

        // You should create a new array
        setArtists([
          ...artists,
          { id: nextId++, name}
        ]);
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}
            <button onClick={() => {
              // It a way to delete something from array: Using filter() function
              setArtists(artists.filter(a => a.id !== artist.id))
            }}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

/**
 * Here is a example transform an array
 */
function ShapeEditor() {
// export default function ShapeEditor() {
  const [shapes, setShapes] = useState(initialShapes);

  function handleClick() {
    const nextShapes = shapes.map(s => {
      // Every circle move down 50px
      if (s.type === 'square') {
        return s;
      } else {
        return {
          ...s,
          y: s.y + 50
        }
      }
    });
    // re-render
    setShapes(nextShapes);
  }

  return (
    <>
      <button onClick={handleClick}>All circles move down</button>
      {shapes.map(s => (
        <div
          className="shape"
          key={s.id}
          style={{
            left: s.x,
            top: s.y,
            borderRadius: s.type === 'circle' ? '50%' : ''
          }}></div>
      ))}
    </>
  )
}

let initialCounter = [0, 0, 0];

/**
 * Replacing items in an array
 */
function CounterList() {
// export default function CounterList() {
  const [counters, setCounters] = useState(initialCounter)

  function handleClick(index: number) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    });
    setCounters(nextCounters);
  }

  return (
    <ul>
      {counters.map((counter, i) => (
        <li key={i}>
          {counter}
          <button onClick={() => {
            handleClick(i);
          }}>+1</button>
        </li>
      ))}
    </ul>
  )
}

let nextId1 = 3;
const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];
/**
 * Inserting to an array
 */
function List1() {
// export default function List1() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState<Artist[]>(initialArtists);

  function handleClick() {
    const insertAt = 1; // It could be any number.
    const nextArtists = [
      // elements before insert position
      ...artists.slice(0, insertAt),
      { id: nextId1, name },
      // elements after insert position
      ...artists.slice(insertAt)
    ];
    setArtists(nextArtists);
    setName('');
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleClick}>
        Insert
      </button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  )
}

/**
 * Making other changes to an array
 */
function List2() {
// export default function List2() {
  const [artists, setArtists] = useState<Artist[]>(initialArtists);

  function handleClick() {
    // You can copy the array first, and then make changes to it.
    let nextArtists = [...artists];
    nextArtists.reverse();
    setArtists(nextArtists);
  }

  return (
    <>
      <button onClick={handleClick}>
        Reverse
      </button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  )
}

type HandleToggleList = {
  (artworkId: number, nextSeen: boolean): void;
}
type ArtWork = {
  id: number,
  title: string,
  seen: boolean
}
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];
/**
 * Updating objects inside array
 */
function BucketList() {
// export default function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  const handleToggleMyList: HandleToggleList = function (artworkId, nextSeen) {
    // const myNextList = [...myList];
    // const artwork = myNextList.find(
    //   a => a.id === artworkId
    // ) as ArtWork;
    // artwork.seen = nextSeen;
    // setMyList(myNextList);

    // You can use map to substitute an old item with its updated version without mutation.
    setMyList(myList.map(artwork => {
      if (artwork.id === artworkId) {
        return { ...artwork, seen: nextSeen };
      } else {
        return artwork;
      }
    }));
  }

  const handleToggleYourList: HandleToggleList = function (artworkId, nextSeen) {
    // const yourNextList = [...yourList];
    // const artwork = yourNextList.find(
    //   a => a.id === artworkId
    // ) as ArtWork;
    // artwork.seen = nextSeen;
    // setYourList(yourNextList);
    
    // In general, you should only mutate objects that you have just created.
    setYourList(yourList.map(artwork => {
      if (artworkId === artwork.id) {
        return { ...artwork, seen: nextSeen };
      } else {
        return artwork;
      }
    }));
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle}: {
  artworks: ArtWork[],
  onToggle: HandleToggleList
}) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle( 
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

/**
 * Write concise update logic with Immer
 */
export default function BucketList1() {
  const [myList, updateMyList] = useImmer(initialList);
  const [yourList, updateYourList] = useImmer(initialList);

  const handleToggleMyList: HandleToggleList = function (artworkId, nextSeen) {
    updateMyList(draft => {
      const artwork = draft.find(a => a.id === artworkId) as ArtWork;
      artwork.seen = nextSeen;
    });
  }

  const handleToggleYourList: HandleToggleList = function (artworkId, nextSeen) {
    updateYourList(draft => {
      const artwork = draft.find(a => a.id === artworkId) as ArtWork;
      artwork.seen = nextSeen;
    });
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList} />
    </>
  );
}
