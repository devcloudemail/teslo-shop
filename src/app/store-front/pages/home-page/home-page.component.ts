import { ProductsService } from '@/products/services/products.service';
import { ProductCardComponent } from '@/store-front/components/product-card/product-card.component';
import { Component, inject } from '@angular/core';
import {rxResource} from '@angular/core/rxjs-interop';
//import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-home-page',
  imports: [ProductCardComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  productsService=inject(ProductsService);

  productsResource = rxResource({
    request: () => ({}),
    loader:({request})=>{
      return this.productsService.getProducts({
      });
    },
  });
 }
