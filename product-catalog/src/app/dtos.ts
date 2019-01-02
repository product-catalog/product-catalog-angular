export class ProductDto {
  name: string;
  description: string;
  photo: PhotoDto;
  price: number;

  ProductDto(){

  }
}

export class PhotoDto {
  name: string;
  photo: string;

  PhotoDto(){
    
  }
}

export class Product {
  recordId: number;
  recordCreated: Date;
  recordLastTimeEdited: Date;
  name: string;
  description: string;
  photo: Photo;
  price: number;

  Product(){

  }
}

export class Photo {
  recordId: number;
  recordCreated: Date;
  recordLastTimeEdited: Date;
  name: string;
  photo: string;

  Photo(){
    
  }
}

export class User{
  username:string;
  password:string;

  User(){

  }
}

export class Token{
  token: string;

  Token(){
    
  }
}