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