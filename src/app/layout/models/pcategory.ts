export interface Pcategory{
    id : number | string;
    name: string;
    image?:string;
    children?:Array<{}>;
}