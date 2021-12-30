export interface Pcategory{
    id : number | string;
    name: string;
    image?:string;
    subCategories?:Array<{}>;
    createdAt?:string | Date;
    updatedAt?:string | Date;
}