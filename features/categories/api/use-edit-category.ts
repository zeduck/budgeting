import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "@/lib/hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<typeof client.api.categories[':id']['$patch']>;
type RequestType = InferRequestType<typeof client.api.categories[':id']['$patch']>['json'];

export function useEditCategory(id?: string) {
  const queryClient = useQueryClient();
  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async (json) => {
      const response = await client.api.categories[':id']['$patch']({ json, param: { id } });
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Category updated");
      queryClient.invalidateQueries({ queryKey: ['category', { id }] });
      queryClient.invalidateQueries({ queryKey: ['categories'] });
      // TO DO: Invalidate summary and transaction
    },
    onError: () => {
      toast.error("Failed to create category");
    },
  });

  return mutation;
}