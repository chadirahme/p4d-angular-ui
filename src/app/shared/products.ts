export class Products {
    productId: string;
    productImage: string;
    productName: string;
    productDesc: string;
    productPrice:number;
    productType:string;
 }


 export class UsersData {
    constructor(  
        public name: string,
        public email: string,
        public phone: string,
        public notes: string
    ){}
 }