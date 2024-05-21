import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignedIn>
        <UserButton afterSignOutUrl="/"/>
      </SignedIn>
      <p>
        Authenticated route
      </p>
    </div>
  );
}
