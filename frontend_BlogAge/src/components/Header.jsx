import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../UserContext";
import {ImPencil2} from 'react-icons/im'

export default function Header() {

  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  //Username Color selection
  const random = Math.floor(Math.random()*10)
  var color;
  {if(random===1){
    color = 'bg-cyan-400'
  }
  if(random ===2)
  {
    color = "bg-gray-500";
  }
  if(random ===3)
  {
    color = "bg-red-500";
  }
  if(random ===4)
  {
    color = "bg-black/80 ";
  }
  if(random ===5)
  {
    color = "bg-lime-600 ";
  }
  if(random ===6)
  {
    color = "bg-cyan-700 ";
  }
  else{
    color = "bg-violet-800";
  }
}
  return (
    <header className="flex justify-between py-4 px-5 bg-gradient-to-r from-violet-500 to-fuchsia-500')]">
      <Link
        to={"/"}
        className=" flex flex-row font-serif text-3xl font-bold  md:border rounded p-3 text-black/75"
      >
        <span className="hidden md:block">B L O G</span>
        {<ImPencil2 className="mx-4" />}
        <span className="hidden md:block">A G E </span>
      </Link>
      <nav className="mt-4">
        {username && (
          <>
            <Link
              to="/create"
              className="bg-gradient-to-r from-blue-600 to-blue-300 hover:from-pink-500 hover:to-yellow-500 px-6 py-3 rounded-lg font-Signika text-base border mr-4"
            >
              Create new post
            </Link>
            <button
              onClick={logout}
              className="bg-gradient-to-r from-blue-600 to-blue-300 hover:from-pink-500 hover:to-yellow-500 px-4 py-[9px] rounded-lg font-Signika text-base border mr-3"
            >
              Logout
            </button>
            <span
              className={`font-semibold p-2 rounded-3xl text-base ${color} text-gray-100`}
            >
              {username.slice(0, 2).toUpperCase()}
            </span>
          </>
        )}
        {!username && (
          <>
            <Link
              to="/login"
              className="bg-gradient-to-r from-blue-600 to-blue-300 hover:from-pink-500 hover:to-yellow-500 px-6 py-3 rounded-lg font-Signika text-base border mr-5 w-40"
            >
              Login
            </Link>
            <Link
              to="/Register"
              className="bg-gradient-to-r from-blue-600 to-blue-300 hover:from-pink-500 hover:to-yellow-500 px-6 py-3 rounded-lg font-Signika text-base border"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}