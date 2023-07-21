import { useEffect, useState } from "react";

export function Parent() {
  const [data, setData] = useState(null);

  // return <Child onFetched={setData}></Child>
  // ✅ Good: Passing data down to the child
  return <Child data={data}></Child>
}

// export function Child({ onFetched }: ChildProps) {
export function Child({ data }: ChildProps) {
  // const data = useSomeAPI();

  // 🔴 Avoid: Passing data to the parent in an Effect
  // useEffect(() => {
  //   if (data) {
  //     onFetched(data);
  //   }
  // }, [onFetched, data]);

  return (
    <>
      {/*  */}
    </>
  )
}

function useSomeAPI() {
  const data = globalThis.localStorage?.getItem('data');
  return data;
}
