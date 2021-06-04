export interface userCredentials {
    email: string,
    password: string
}

export interface authenticationResult {
    token: string,
    expiration: Date
}

export interface userDTO {
    id: string,
    email: string
}