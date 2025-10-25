import { NavLink, Outlet } from "react-router-dom";
import ProFastLogo from "../Pages/Shared/ProFastLogo/ProFastLogo";

const DashBoardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      {/* Drawer toggle for mobile */}
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      {/* Main content area */}
      <div className="drawer-content flex flex-col">
        {/* Navbar (visible only on small screens) */}
        <nav className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>

          <div className="mx-2 flex-1 px-2 text-lg font-semibold">
            Dashboard
          </div>
        </nav>

        {/* Dynamic page content */}
        <main className="p-4">
          <Outlet />
        </main>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <aside className="menu bg-base-200 min-h-full w-80 p-4">
          <h2 className="text-xl font-semibold mb-4">Dashboard Menu</h2>
          <ProFastLogo></ProFastLogo>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a><NavLink to='/dashboard/myParcels'>My Parcel</NavLink></a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default DashBoardLayout;
