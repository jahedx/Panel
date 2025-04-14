export interface Pagination {
    total_count: number;
    total_pages: number;
    current_page: number;
    page_size: number;
}

export type IotCloudPortalApiResponse<T> = {
    status_code?: number;
    status: 'success' | 'failure';
    message?: string;
    key?: string;
    data: (T & { pagination?: Pagination }) | null;
    token?: string;
}

export class ApiError extends Error {
    constructor(
        public status: 'failure',
        public message: string,
        public key?: string,
        public status_code?: number
    ) {
        super(message);
        this.name = 'ApiError';
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isApiError(response: any): response is ApiError {
    return response instanceof ApiError;
}