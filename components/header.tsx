import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import HeaderLogo from "./header-logo";
import Navigation from "./navigation";
import { Loader2 } from "lucide-react";
import WelcomeMsg from "./welcomemsg";
import Filters from "./filters";

export default function Header() {
  return (
    <header className="bg-gradient-to-b from-blue-950 via-black via-75% to-black px-4 py-8 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">

        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex items-center lg:gap-x-8">
            <HeaderLogo />
            <div className=" translate-y-2">
              <WelcomeMsg />  
            </div>
          </div>
          <div className="flex gap-x-8">
            <Navigation />
            <ClerkLoading>
              <Loader2 className="size-8 animate-spin text-slate-400"/>
            </ClerkLoading>
            <ClerkLoaded>
              <UserButton/>
            </ClerkLoaded>
          </div>
          

        </div>
        
        
        <Filters />
      </div>
    </header>
  );
}