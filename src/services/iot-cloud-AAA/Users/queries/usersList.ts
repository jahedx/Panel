import { IotCloudPortalApiResponse } from "@/services/IotCloudPortal";
import { authAxios } from "@/configs/axios/BaseAxios";
import { IListParams } from "@/constants/interfaces/request.interface";

export interface Endpoint {
    id: number;
    type: string;
    from_ip: string;
    to_ip: string;
}

export interface Organization {
    id: number;
    code: string;
    name: string;
    identity_number: number;
    phone: string;
    email: string;
    address: string;
    description: string;
}

export interface User {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    indentity_number: string;
    phone: string;
    endpoint_id: Endpoint;
    organization_id: Organization;
    is_service: boolean;
    address: string;
}

export type UsersListResponse = IotCloudPortalApiResponse<{
    users: User[]
}>;

export async function UsersList(request: IListParams) {
    const response = await authAxios.post("/users/list/", {
        pagination: request.pagination,
        filters: request.filters
    })

    return response.data
}