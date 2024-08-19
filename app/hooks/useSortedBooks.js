import { useMemo } from "react";

export function useSortedBooks(books) {
  return useMemo(() => {
    return [...books].sort((a, b) => a.title.localeCompare(b.title));
  }, [books]);
}
