import { useRef } from "react";

export default function CatFriends() {
  const firstCatRef = useRef<HTMLImageElement>(null);
  const secondCatRef = useRef<HTMLImageElement>(null);
  const thirdCatRef = useRef<HTMLImageElement>(null);

  const scrollOptions: ScrollIntoViewOptions = {
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center'
  };

  function scrollToFirstCat() {
    firstCatRef.current?.scrollIntoView(scrollOptions);
  }

  function scrollToSecondCat() {
    secondCatRef.current?.scrollIntoView(scrollOptions);
  }

  function scrollToThirdCat() {
    thirdCatRef.current?.scrollIntoView(scrollOptions);
  }

  return (
    <div className="cat-friends">
      <nav>
        <button onClick={scrollToFirstCat}>Tom</button>
        <button onClick={scrollToSecondCat}>Maru</button>
        <button onClick={scrollToThirdCat}>Jellylorum</button>
      </nav>
      <div>
        <ul>
          <li>
            <img
              src="https://placekitten.com/g/200/200"
              alt="Tom"
              ref={firstCatRef}
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/300/200"
              alt="Maru"
              ref={secondCatRef}
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/250/200"
              alt="Jellylorum"
              ref={thirdCatRef}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

/**
 * This example used “Ref callback”
 */
export function CatFriendsPlus() {
  const itemsRef = useRef<Map<number, HTMLLIElement >>();

  function scrollToId(itemId: number) {
    const map = getMap();
    const node = map.get(itemId) as HTMLLIElement;
    node.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }

  function getMap(): Map<number, HTMLLIElement > {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  return (
    <div className="cat-friends plus">
      <nav>
        <button onClick={() => scrollToId(0)}>Tom</button>
        <button onClick={() => scrollToId(5)}>Maru</button>
        <button onClick={() => scrollToId(9)}>Jellylorum</button>
      </nav>
      <div>
        <ul>
          {catList.map(cat => (
            <li
              key={cat.id}
              ref={node => {
                const map = getMap();
                if (node) {
                  map.set(cat.id, node);
                } else {
                  map.delete(cat.id);
                }
              }}>
              <img src={cat.imageUrl} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}


const catList: {id: number, imageUrl: string}[] = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i
  });
}
