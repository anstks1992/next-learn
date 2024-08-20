"use client";
//1.next는 ssr렌더링이다.
//2.ssr은 서버에서 컴포넌트와 페이지들을 모두 html로 렌더링하다음 클라이언트에 보낸다

//3.이 과정에서 인터랙티브하지 않은 html을
// 클라이언트 자바스크립트를 사용하여 인터렉티브한 리액트 컴포넌트로 변환하는 과정이
// 하이드레이션(Hydration)이고 이런 하이드레이션이 가능한 컴포넌트는
// 맨 위에 use client 지시어를 가지고 잇는 컴포넌트 뿐이다

//4.인터렉티브한(useState, onclick event등) 페이지에만 use client 사용시
//렌더링시 자바스크립트 양 유무를 판단할수 있기 때문에 로딩 속도 이점을 가짐

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const path = usePathname(); //현재 url확인 가능
  const [count, setCount] = useState(0);
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us">About</Link>
          {path === "/about-us" ? "🔥" : ""}
        </li>
      </ul>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </nav>
  );
}
