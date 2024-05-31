import { useOpenAccount } from "@/features/accounts/hooks/use-open-account";

export default function AccountColumn({
  account,
  accountId
} : {
  account: string;
  accountId: string;
}) {
  const { onOpen: onOpenAccount } = useOpenAccount();
  
  const onCLick = () => {
    onOpenAccount(accountId);
  };

  return(
    <div
      onClick={onCLick}
      className="flex items-center cursor-pointer hover:underline"
    >
      {account}
    </div>
  )
}