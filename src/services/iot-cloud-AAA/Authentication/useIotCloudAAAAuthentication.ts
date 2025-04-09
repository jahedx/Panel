import { useMutation } from "@tanstack/react-query"
import { UsersLoginResponse, UsersLoginRequest, UsersLogin } from "./mutations/usersLogin"


export const useUsersLogin = () => {
    const query = useMutation<UsersLoginResponse, Error, UsersLoginRequest>({
        mutationKey: ['UsersLogin'],
        mutationFn: (req) => UsersLogin({
            username: req.username,
            password: req.password
        })
    })
    return query
}