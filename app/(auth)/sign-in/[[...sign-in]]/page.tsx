import Image from "next/image";
import { Loader2 } from "lucide-react";
import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen h-full flex flex-col items-center justify-center px-4">
      
      <div className="h-32 w-32 rounded-lg bg-blue-600 hidden lg:flex items-center justify-center">
        <div className="mx-2">
          <Image src="logo.svg" height={100} width={100} alt="Logo"/>
        </div>
      </div>

      <div className="text-center space-y4 pt-8">
        <h1 className="font-bold text-3xl text-[#2E2A47]">
          Welcome Back!
        </h1>
        <p className="text-base text-[#7E8CA0]">
          Log in or Create account to get back to your dashboard!
        </p>
      </div>
      
      <div className="flex items-center justify-center mt-8">
        <ClerkLoaded>
          <SignIn path="/sign-in" />
        </ClerkLoaded>
        <ClerkLoading>
          <Loader2 className="animate-spin text-muted-foreground"/>
        </ClerkLoading>
      </div>

    </div>
  );
}
