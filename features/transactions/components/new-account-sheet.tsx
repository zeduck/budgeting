import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import AccountForm from "./account-form";
import { insertAccountSchema } from "@/db/schema";
import { z } from "zod";
import { useCreateTransaction } from "../api/use-create-transaction";

const formSchema = insertAccountSchema.pick({
  name: true,
});

type FormValues = z.input<typeof formSchema>;

export default function NewAccountSheet() {
  const { isOpen, onClose } = useNewAccount();

  const mutation = useCreateTransaction();

  const onSubmit = (values: FormValues) => {
    mutation.mutate(values, {
      onSuccess: () => {
        onClose();
      }
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4">
        <SheetHeader>
          
          <SheetTitle>
            New Account
          </SheetTitle>
          
          <SheetDescription>
            Create a new account to track your transactions.
          </SheetDescription>

        </SheetHeader>
      
        <AccountForm 
          onSubmit={onSubmit} 
          disabled={mutation.isPending} 
          defaultValues={{ name: '', }}
        />
      </SheetContent>
    </Sheet>
  );
}