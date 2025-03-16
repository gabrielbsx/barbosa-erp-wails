import { Link } from "react-router";

const routes = [
  {
    name: "Início",
    to: "/",
  },
  {
    name: "Contas a Pagar",
    to: "/contas-a-pagar",
  },
  {
    name: "Contas a Receber",
    to: "/contas-a-receber",
  },
] as const;

export default function Menu() {
  // return (
  //   <nav className="w-full bg-gray-700">
  //     <ul className="flex w-full justify-start">
  //       {routes.map(({ name, to }, index) => (
  //         <li
  //           key={index}
  //           className="cursor-pointer transition-all duration-500 bg-gray-700 hover:bg-gray-800 px-4 py-2"
  //         >
  //           <Link to={to} className="text-white">
  //             {name}
  //           </Link>
  //         </li>
  //       ))}
  //     </ul>
  //   </nav>
  // );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">ERP</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
}
