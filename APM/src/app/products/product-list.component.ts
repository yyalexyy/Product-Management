import { Component } from "@angular/core";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    pageTitle: string = 'Product List';
    products: any[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "ImageUrl": "assets/images/garden_cart.png"
        }, 
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "Tbx-0048",
            "releaseDate": "May 21, 2021",
            "description": "Curved claw steel hammer",
            "price": 8.99,
            "starRating": 4.8,
            "ImageUrl": "assets/images/hammer.png"
        }
    ];
}