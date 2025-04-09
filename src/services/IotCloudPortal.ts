export type IotCloudPortalApiResponse<T> = {
    status_code?: number;
    status?: 'success' | 'failure';
    message?: string;
    key?: string;
    data: T | null;
    token?: string;
}