/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../ContextApi/ContextApi";

const Navbar = () => {
  const { user, LogOut } = useContext(authContext);
  const handleLogout = () => {
    LogOut();
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="mytasks">My Tasks</Link>
            </li>

            <li>
              <Link to="add">Add</Link>
            </li>
            <li>
              <Link to="complete">completed</Link>
            </li>
            {user?.uid ? (
              <>
                <li>
                  <Link onClick={handleLogout}>Sign Out</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="login">Login</Link>
                </li>
                <li>
                  <Link to="signup">SignUP</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">TASK MANAGER</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="mytasks">My Tasks</Link>
          </li>

          <li>
            <Link to="add">Add</Link>
          </li>
          <li>
            <Link to="complete">completed</Link>
          </li>
          {user?.uid ? (
            <>
              <li>
                <Link onClick={handleLogout}>Sign Out</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="login">Login</Link>
              </li>
              <li>
                <Link to="signup">SignUP</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="form-control w-52 hidden md:block lg:block">
        <label className="cursor-pointer label">
          <input type="checkbox" className="toggle toggle-warning" />
        </label>
      </div>
      <div className="navbar-end hidden md:block lg:block">
        <Link className="btn">All Task</Link>
      </div>
    </div>
  );
};

export default Navbar;
