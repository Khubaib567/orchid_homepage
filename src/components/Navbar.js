import React from "react";
import { Navbar as Nav, Button, Menu, Divider } from "react-daisyui";
import { MenuIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar(props) {
  return (
    <>
     <div class="navbar bg-black">
  <div class="flex-none">
    <button class="btn btn-square btn-ghost">
      <img  class="h-auto w-10" src="https://i.ibb.co/7gVyKFy/orchid-cottage.jpg" />
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg> */}
    </button>
  </div>
  <div class="flex-1">
    <Link to="/">
    <a class="btn btn-ghost normal-case text-xl text-white">{props.title}</a>
    </Link>
  </div>

  <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="text-white inline-block pt-3 w-5 h-auto stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </div>
      </label>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
        {props.pages.map((page) => (
              <Link key={page.id} to={page.path}>
                <a>{page.name}</a>  
              </Link>
            ))}
        </li>
      </ul>
    </div>
</div>

    </>
  );
}
