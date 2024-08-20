//파일이름은 반드시 loading.tsx 여야 함
//파일은 반드시 page옆에 잇어야 함(해당 페이지에만 로딩이 적용)

export default function Loading() {
  return <h2>loading...</h2>;
}

/*
요청을 하면 서버에서 먼저 로딩을 줌
-> 로딩을 하면서 html을 클라이언트에 조금식 쭘
-> html을 다주면 로딩을 종료하고 요청한 페이지를 보여줌
*/
