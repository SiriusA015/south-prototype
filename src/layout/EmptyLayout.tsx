import { Outlet } from "react-router-dom";

const EmptyLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default EmptyLayout;
