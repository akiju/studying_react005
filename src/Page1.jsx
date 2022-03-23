import { Link, Outlet } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1パージだよ。</h1>
      <Outlet />
      <Link to="d1A">DetailA</Link>
      <br />
      <Link to="d1B">DetailB</Link>
    </div>
  );
};
