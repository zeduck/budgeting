import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import HeaderLogo from "./header-logo";
import Navigation from "./navigation";
import { Loader2 } from "lucide-react";
import WelcomeMsg from "./welcomemsg";
import Filters from "./filters";

export default function Header() {
  return (
    <header className="bg-gradient-to-b from-blue-950 to-black px-4 py-8 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <ClerkLoading>
            <Loader2 className="size-8 animate-spin text-slate-400"/>
          </ClerkLoading>
          <ClerkLoaded>
            <UserButton/>
          </ClerkLoaded>
        </div>
        <WelcomeMsg />
        <Filters />
      </div>
    </header>
  );
}