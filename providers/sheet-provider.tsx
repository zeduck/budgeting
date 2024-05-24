'use client';

import NewAccountSheet from "@/features/accounts/components/new-account-sheet";
import { useMountedState } from "react-use";

export function SheetProvider() {
  const isMounted = useMountedState();
  // useMountedState() is the same as:
  // const [isMounted, setIsMounted] = useState(false);
  // useEffect(() => { setIsMounted(true); }, []);

  if (!isMounted) return null;
  return(
    <>
      <NewAccountSheet />
    </>
  );
}