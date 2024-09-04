'use client';

import { useUser } from "@clerk/nextjs";

export default function WelcomeMsg() {
  const { user, isLoaded } = useUser();

  return (
    <div className="space-y-2 mb-4">
      <h2 className="text-xl lg:text-2xl text-white font-medium">
        { user?.firstName }{ isLoaded? "'s" : "" } Financial Dashboard
      </h2>
      {/* <p className="text-sm lg:text-base text-[#89b6fd]">
        
      </p> */}
    </div>
  )
}