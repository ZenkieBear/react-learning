import { useEffect, useState } from "react";
import { results } from "./data";

const pageSize = 5;

export default function Search() {
  const [query, setQuery] = useState('');

  return (
    <div>
      Query: <input value={query} onChange={e => setQuery(e.target.value)}/>
      <SearchResults query={query}/>
    </div>
  )
}

export function SearchResults({ query }: SearchResultsProps) {
  const [results, setResults] = useState<Result[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let ignore = false;
    // 🔴 Avoid: Fetching without cleanup logic
    fetchResult(query, page).then(json => {
      if (!ignore) {
        setResults(json);
      }
    });

    return () => {
      ignore = true;
    }
  }, [query, page]);

  function handleNextPageClick() {
    setPage(page + 1);
  }

  function handlePrevPageClick() {
    setPage(page - 1);
  }

  return (
    <>
      <ul>
        {results.map(r => <li key={r.id}>{r.title}</li>)}
      </ul>
      <button onClick={handlePrevPageClick}>Previous Page</button>
      <button onClick={handleNextPageClick}>Next Page</button>
    </>
  )
}

/**
 * Simulate data fetching
 * @param query keyword
 * @param page page
 * @returns 
 */
function fetchResult(query: string, page: number): Promise<Result[]> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(filterResult(query, page));
    }, 3000 * Math.random());
  });
}

/**
 * Simulate data searching
 */
function filterResult(query: string, page: number): Result[] {
  const filtered = results.filter(result => result.title.includes(query));
  const startOffset = pageSize * (page - 1);
  const endOffset = pageSize * page;
  const paged = filtered.slice(startOffset, endOffset);
  return paged;
}
