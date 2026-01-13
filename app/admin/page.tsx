"use client"

import { UserButton } from "@clerk/nextjs";

export default function adminpage() {
  return (
    <div>
      <div>Hello admin</div>
   <UserButton afterSignOutUrl = "/admin"/>
    </div>
   
  );
}
