import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../products/services/products.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductCarouselComponent } from '@/products/components/product-carousel/product-carousel.component';

@Component({
  selector: 'app-product-page',
  imports: [ProductCarouselComponent],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {
  activatedRoute = inject(ActivatedRoute);
  ProductsService=inject(ProductsService);
  productIdSlug = this.activatedRoute.snapshot.params['idSlug'];

  productResource = rxResource({
    request: () => ({idSlug: this.productIdSlug}),
    loader:({request})=> {
      return this.ProductsService.getProductByIdSlug(request.idSlug)
    },
  });

}
