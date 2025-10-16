import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

const baseUrl = environment.baseUrl;

@Pipe({
  name: 'productImage',
})
export class ProductImagePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string | string[]): SafeUrl {

    let imageUrl = '';

    if (typeof value === 'string') {
      imageUrl = `${baseUrl}/files/product/${value}`;
    } else {
      const image = value?.at(0);
      imageUrl = image
        ? `${baseUrl}/files/product/${image}`
        : './assets/images/no-image.jpg';
    }

    // 👇 Marcamos la URL como segura para que Angular no la bloquee
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
}
