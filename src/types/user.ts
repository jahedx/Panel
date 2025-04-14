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