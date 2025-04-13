import { IotCloudPortalApiResponse } from "@/services/IotCloudPortal";
import { authAxios } from "@/configs/axios/BaseAxios";

export interface UsersLoginRequest {
    username: string;
    password: string;
}

export interface UsersLoginResponse extends IotCloudPortalApiResponse<string> {
    refreshToken?: string;
}

export async function UsersLogin(request: UsersLoginRequest) {
    const response = await authAxios.post("/users/login/", {
        username: request.username,
        password: request.password
    })

    return response.data
}