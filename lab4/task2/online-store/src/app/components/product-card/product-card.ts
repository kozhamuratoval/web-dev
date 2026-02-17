import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})

export class ProductCard {
  @Input() product!: Product;
  shareWhatsapp() {
    const url = `check out this product ${this.product.link}`;
    window.open(`https://api.whatsapp.com/send?text=${url}`, '_blank');
  }
  shareTelegram() {
    const url = `check out this product ${this.product.link}`;
    window.open(`https://t.me/share/url?url=${url}`, '_blank');
  }
}
