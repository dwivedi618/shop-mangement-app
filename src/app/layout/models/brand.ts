export interface Brand{
    readonly id ?: number|string;
    name: string;
    image?:string;
    createdAt?:string | Date;
    updatedAt?:string | Date;
}