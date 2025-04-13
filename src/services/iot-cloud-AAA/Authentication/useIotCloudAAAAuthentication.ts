import { useMutation } from "@tanstack/react-query"
import { UsersLoginResponse, UsersLoginRequest, UsersLogin } from "./mutations/usersLogin"
import { setTokens } from "@/utils/auth"
import { router } from "@/main"
import { UsersToken, UsersTokenRequest, UsersTokenResponse } from "./mutations/usersToken"

export const useUsersLogin = () => {
    const query = useMutation<UsersLoginResponse, Error, UsersLoginRequest>({
        mutationKey: ['UsersLogin'],
        mutationFn: (req) => UsersLogin({
            username: req.username,
            password: req.password
        }),
        onSuccess: (data) => {
            if (data.token) {
                setTokens(data.token, data.refreshToken || '');
                router.navigate({ to: '/' });
            }
        }
    })
    return query
}
export const useUsersToken = () => {
    const query = useMutation<UsersTokenResponse, Error, UsersTokenRequest>({
        mutationKey: ['UsersToken'],
        mutationFn: (req) => UsersToken({
            username: req.username,
            password: req.password
        }),
        onSuccess: (data) => {
            if (data.token) {
                setTokens(data.token, data.token || '');
                router.navigate({ to: '/' });
            }
        }
    })
    return query
}