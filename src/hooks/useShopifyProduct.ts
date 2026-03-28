import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "@/lib/shopify";

export function useShopifyProduct(handle: string) {
  return useQuery({
    queryKey: ["shopify-product", handle],
    queryFn: () => fetchProduct(handle),
    staleTime: 5 * 60 * 1000, // 5 min
    retry: 2,
  });
}
