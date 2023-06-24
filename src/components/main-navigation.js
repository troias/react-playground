import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function MainNavigation() {
  const location = useLocation();

  console.log("useLocation()", location);

  //   const isActive = (match, location) => {
  //     if (!match) {
  //       return false;
  //     }
  //     return match.url === location.pathname;
  //   };

  return (
    <React.Fragment>
      <header className="bg-gray-800 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
        <nav className="flex items-center justify-between px-4 py-3 sm:p-0">
          <div>
            <img
              className="h-8"
              src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg"
              alt="Workflow logo"
            />
          </div>
          <div className="sm:hidden">
            <button
              type="button"
              className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  className="hidden"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                />
                <path
                  className="block"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 9h12v1.5H6zm0 4h12v-1.5H6zm0 4h12V16H6z"
                />
              </svg>
            </button>
          </div>
        </nav>
        <div className="hidden sm:block sm:flex sm:items-center sm:px-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900"
                : "mt-3 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/about"
            end
            className={({ isActive }) =>
              isActive
                ? "px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900"
                : "mt-3 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/events"
            end
            className={({ isActive }) =>
              isActive
                ? "px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900"
                : "mt-3 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700"
            }
          >
            Events
          </NavLink>
        </div>
      </header>
    </React.Fragment>
  );
}
