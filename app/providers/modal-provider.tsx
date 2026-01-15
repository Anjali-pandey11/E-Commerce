"use client";

import {useEffect, useState} from "react";

import { StoreModal } from "@/components/modals/store-modal";

export const Modalprovider = () => {
   const [isMounted, SetIsMounted] = useState<boolean>(false);

   // precaution from hydration error
   useEffect(() => {
    SetIsMounted(true);

   },[]);

   if(!isMounted){
    return null;
   }

   return (
    <>
      <StoreModal/>
    </>
   )
}