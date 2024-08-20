import "../styles/global.css";
import { Metadata } from "next";
import Navigation from "../component/navigation";
import AboutUs from "./(home)/page";

export const metadata: Metadata = {
  //공통
  title: { template: "%s | Next Movies", default: "Next Movies" },
  description: "the best Movies on the best framework ",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}

/* <Layout>
  <AboutUs />
</Layout>; 

//AboutUs 컴포넌트가 레이아웃 컴포넌트의 children prop이 되는거

//순서
//1. next는 root 레이아웃을 가져와 무언가 렌더링 할 준비를 한다
//2. 갈려는 페이지의 url을 확인
//3. 만약 about-us페이지로 갈거면 거기에 레이아웃 파일이 잇는지 확인한다
//4. <Layout>
     <AboutUsLayout>
     </AboutUsLayout>
     </Layout>; 
//5. 안에 페이지가 있는지 확인하고 있으면(sales가 있으니)
     <Layout>
      <AboutUsLayout>
       <sales/>
      </AboutUsLayout>
     </Layout>; 
//6. 만약 about-us안에 또다른 layout이 있을경우
     <Layout>
      <AboutUsLayout>
       <salesLayout>
        <sales/>
       <salesLayout/>
      </AboutUsLayout>
     </Layout>; 
//7. 결과적으로 이 모든 컴포넌트는 중첩되어 {children}에 렌더링
*/
