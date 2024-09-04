import { Separator } from "./ui/separator";
import { formatCurrency } from "@/lib/utils";

export default function CategoryTooltip({ active, payload }: any) {
  if (!active) return null;

  const name = payload[0].payload.name;
  const value = payload[0].value;

  return (
    <div className="rounded-sm bg-gray-900 text-white shadow-sm border overflow-hidden">
      <div className="text-sm p-2 px-3">
        {name}
      </div>

      <Separator />

      <div className="p-2 px-3 space-y-1">

        {/* EXPENSES */}
        <div className="flex items-center justify-between gap-x-4">
          <div className="flex items-center gap-x-2">
            <div className="size-1.5 bg-rose-500 rounded-full"/>
            <p className="text-sm">
              Expenses
            </p>
          </div>
          <p className="text-sm text-right font-medium">
            {formatCurrency(value === 0 ? value : value * -1)}
          </p>
        </div>
    
      </div>
    </div>
  )
}