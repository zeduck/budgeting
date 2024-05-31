import { useOpenCategory } from "@/features/categories/hooks/use-open-category";
import { useOpenTransaction } from "@/features/transactions/hooks/use-open-transaction";
import { cn } from "@/lib/utils";
import { TriangleAlert } from "lucide-react";

export default function CategoryColumn({
  id,
  category,
  categoryId
} : {
  id: string;
  category: string | null;
  categoryId: string | null;
}) {
  const { onOpen: onOpenCategory } = useOpenCategory();
  const { onOpen: onOpenTransaction } = useOpenTransaction();
  
  const onCLick = () => {
    if (categoryId) onOpenCategory(categoryId);
    else onOpenTransaction(id);
  };

  return(
    <div
      onClick={onCLick}
      className={cn(
        "flex items-center cursor-pointer hover:underline",
        !category && 'text-rose-500'
      )}
    >
      {!category && <TriangleAlert className="mr-2 size-4 shrink-0" />}
      {category || 'Uncategorized'}
    </div>
  )
}