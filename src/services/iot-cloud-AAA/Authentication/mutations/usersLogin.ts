import { IotCloudPortalApiResponse } from "@/services/IotCloudPortal";
import { authAxios } from "@/configs/axios/BaseAxios";

export interface UsersLoginRequest {
    username: string;
    password: string;
}

export type UsersLoginResponse = IotCloudPortalApiResponse<string>;

export async function UsersLogin(request: UsersLoginRequest) {
    const response = await authAxios.post("/users/login/", {
        username: request.username,
        password: request.password
    })

    return response.data
}