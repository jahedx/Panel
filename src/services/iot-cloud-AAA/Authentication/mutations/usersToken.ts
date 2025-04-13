
import { IotCloudPortalApiResponse } from "@/services/IotCloudPortal";
import { authAxios } from "@/configs/axios/BaseAxios";

export interface UsersTokenRequest {
    username: string;
    password: string;
}

export interface UsersTokenResponse extends IotCloudPortalApiResponse<string> {
    token?: string;
}

export async function UsersToken(request: UsersTokenRequest) {
    const response = await authAxios.post("/users/token/", {
        username: request.username,
        password: request.password
    })

    return response.data
}