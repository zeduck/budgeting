import { format } from "date-fns";
import { Separator } from "./ui/separator";
import { formatCurrency } from "@/lib/utils";

export default function CustomTooltip({ active, payload }: any) {
  if (!active) return null;

  const date = payload[0].payload.date;
  const income = payload[0].value;
  const expenses = payload[1].value;

  return (
    <div className="rounded-sm bg-gray-900 shadow-sm border overflow-hidden">
      <div className="text-sm p-2 px-3 text-gray-200 bg-gray-900">
        {format(date, 'MMM dd, yyyy')}
      </div>

      <Separator />

      <div className="p-2 px-3 space-y-1">
        {/* INCOME */}
        <div className="flex items-center justify-between gap-x-4">
          <div className="flex items-center gap-x-2">
            <div className="size-1.5 bg-blue-500 rounded-full"/>
            <p className="text-sm text-gray-200">
              Income
            </p>
          </div>
          <p className="text-sm text-right font-medium">
            {formatCurrency(income)}
          </p>
        </div>

        {/* EXPENSES */}
        <div className="flex items-center justify-between gap-x-4">
          <div className="flex items-center gap-x-2">
            <div className="size-1.5 bg-rose-500 rounded-full"/>
            <p className="text-sm text-gray-200">
              Expenses
            </p>
          </div>
          <p className="text-sm text-right font-medium">
            {formatCurrency(expenses === 0 ? expenses : expenses * -1)}
          </p>
        </div>
    
      </div>
    </div>
  )
}