import { IListParams } from "@/constants/interfaces/request.interface";
import { UsersList, UsersListResponse } from "./queries/usersList";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useUsersList = (request: IListParams) => {
    const query = useQuery<UsersListResponse, Error, UsersListResponse>({
        queryKey: ['UsersList', request],
        queryFn: () => UsersList(request),
        placeholderData: keepPreviousData,
    })
    return query
}