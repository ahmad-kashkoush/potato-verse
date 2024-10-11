"use client";

import { useSearchParams } from "next/navigation";
// http://localhost:3001/games?price=20&filter=new%20game&price[min]=10&price[max]=50
function Page({}) {
  const searchParams = useSearchParams();
  const filter = [
    ...searchParams
      .keys()
      .map((key) => ({ key, value: searchParams.get(key) })),
  ];
  return (
    <div>
      /games
      {filter.map((item) => (
        <p key={item.key}>
          {item.key}: {item.value}
        </p>
      ))}
    </div>
  );
}
export default Page;
