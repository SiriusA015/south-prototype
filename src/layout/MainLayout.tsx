import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import styled from "styled-components";

const StyledPage = styled.div`
  width: 100%;
  background-size: cover;
`;

const MainLayout = () => {
  return (
    <StyledPage className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
        {/* <div className="mt-full h-[900px] w-full bg-[#E2E2E2] mx-0"></div> */}
      </main>
    </StyledPage>
  );
};

export default MainLayout;
