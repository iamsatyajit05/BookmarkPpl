"use client";

import { useState } from "react"; 
import { signOut } from "next-auth/react";

export default function UserProfile({ session }) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div onMouseEnter={() => {setIsShow(true)}}  onMouseLeave={() => {setIsShow(false)}} className="relative py-2">
      <div>
        <h3 >{session.user.name}</h3>
      </div>
      {isShow && <button onClick={() => signOut()} className="absolute w-full bg-slate-800 rounded-md mt-2 p-2">Log Out</button>}
    </div>
  )
};