import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import type { ExtendedColumnFilter } from "@/types/data-table";

const FILTERS_KEY = "filters";

export function useFilterState<TData>(columns: { id: string }[]) {
    const queryClient = useQueryClient();

    const { data: filters = [] } = useQuery<ExtendedColumnFilter<TData>[]>({
        queryKey: [FILTERS_KEY],
        initialData: [],
    });

    const setFilters = useCallback(
        (newFilters: ExtendedColumnFilter<TData>[] | ((prev: ExtendedColumnFilter<TData>[]) => ExtendedColumnFilter<TData>[])) => {
            const updatedFilters = typeof newFilters === "function" ? newFilters(filters) : newFilters;
            queryClient.setQueryData([FILTERS_KEY], updatedFilters);
        },
        [filters, queryClient]
    );

    return { filters, setFilters };
} 