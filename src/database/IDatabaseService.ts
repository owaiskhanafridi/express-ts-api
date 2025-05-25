export interface IDatabaseService {
    connect(): Promise<void>;
    disconnect(): Promise<void>;

    getUsers(): Promise<any[]>;
    createUser(user: {name: string; email: string; password: string}): Promise<any>;
}