import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCard],
  standalone: true,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})

export class ProductList {
  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      description: 'A high-performance laptop',
      price: 1200,
      rating: 4.5,
      image: ['/assets/laptop.png'],
      link: 'https://www.amazon.com/BiTECOOL-Laptop-Display-Fingerprint-Battery/dp/B0FYDR6LYN/ref=sr_1_1_sspa?adgrpid=161033438092&dib=eyJ2IjoiMSJ9.9xbT55RN9LFMgiLiodS9Ju5eXzPgli3Hhh-7K8oslJUQrIqiVaC7Ks4i7VzENvZy-o2MrYJ1PAx61WYN-MEBSFG_pUlmOJeO5q7BWBLSs15vBeowiEp1KPjtPMKZjiPa1Sr9KACag4l6xIgux0EFBkSxd_njQHiARm8d17GNBJcxDAteEfCsRiUWtkjB4o9XL_WoBOf8b3jtJt9bs0xnbSfBzW7eDsij7VPB23N-WDo.QJYdLol19uBo_9zRk4Kl3CUjGDDQnAUr117lUBUFVtE&dib_tag=se&hvadid=681337568802&hvdev=c&hvlocphy=9198010&hvnetw=g&hvqmt=b&hvrand=2599588442065365355&hvtargid=kwd-2400333233402&hydadcr=21438_13508877&keywords=laptops+clearance+2025&mcid=422f6a6f42de30549dabf0d8921fda71&qid=1771313787&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
    },
    {
      id: 2,
      name: 'Smartphone',
      description: 'Latest smartphone with advanced features',
      price: 800,
      rating: 4.7,
      image: ['/assets/phone.png'],
      link: 'https://www.amazon.com/Apple-iPhone-16-Pro-Max/dp/B0DHJ896RY/ref=sr_1_24?dib=eyJ2IjoiMSJ9.7bWVw-IThnMUIya2Bwdu3dpY0DPIdXHiNiLtqM-Hcu7BGrtaS5sL4Jlt28gBncH2247LBe_BMOVC6ajvcFvSimjFruyArqCA1qQGrif1W94no25ll27QoixSWNRg_OxlUOHNFNxZLXSD9TW7E7X8oqKkHxjk800TzaIgVq5rkzwmHNfbOl0sjhUmejCM2Yqz.db3ebYdIklkQiHnoTQCuJi1nyZSNw7NjZQlM0LEcta0&dib_tag=se&keywords=iphone&qid=1771317267&sr=8-24&xpid=JAeBx2HVXPE45&th=1'
    },
    {
      id: 3,
      name: 'Headphones',
      description: 'Noise-cancelling over-ear headphones',
      price: 200,
      rating: 4.3,
      image: ['/assets/headphones.png'],
      link: 'https://www.amazon.com/Sony-Canceling-Wireless-Headphones-Comfortable/dp/B0CWVX1GNX/ref=sr_1_1?dib=eyJ2IjoiMSJ9.ghh1PULtdxDpLebPQKkASEmTj1FxI81iSoCe23TgrwgF72EnlHK9D7mAI-chS9_ePCsVe58_JyNBBufe3Fxx4CfZC9oKcTWFxgZRswwm_hLAd4D6beyFKd2sHy9YAAIU2yW4vVILLYfgDM49nKrivpiR1R4Rsa3hxwi3FuqDwtLRaXfbaY56EAdfp0w0QqvBi9oVdUaOTE0ktRAbsGDyTn7Gh38clFIynwpJuzSzQ7M.yrJTlA6mlNS5tN7CuThOFO15rm-hrxyTU7Rym4Jsy9A&dib_tag=se&keywords=headphones&qid=1771313944&sr=8-1&th=1'
    },{
      id:4,
      name: 'Smartwatch',
      description: 'A smartwatch with fitness tracking features',
      price: 250,
      rating: 4.6,
      image: ['/assets/smartwatch.png'],
      link: 'https://www.amazon.com/Receive-Fitness-Tracking-Waterproof-Smartwatch/dp/B0BFQ36XPW/ref=sr_1_1_sspa?dib=eyJ2IjoiMSJ9.xO1TkKp_PrtMwcpEPVIaUhIP8P4UdF3f0ZWfBkNngwgICoV10ly6XFmB05Cu0ZfueUnDmf-Xh21LOIjh4e5OJFFMsh3X27IwBzc_Y_qe6lCYd5YkMqf9pvkUmQpEEHSj0kK9FDoBTA2_83PApu3hK7Zq5sHKKY7DeUuPSjddI0v6yHOGnOoCSeAbocTZGJ1VGxXEpj2OLNTUdxeiuauQv4bUtPy_fAz3sN2DR6VKEVs.gGXam0NOMBJCETDywyk2Rbmv2LaVg4wHI5d4i41Ud44&dib_tag=se&keywords=smart%2Bwatch&qid=1771313982&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1'
    }, {
      id: 5,
      name: ' Tablet',
      description: 'A lightweight tablet for work and entertainment',
      price: 500,
      rating: 4.4,
      image: ['/assets/tablet.png'],
      link: 'https://www.amazon.com/Samsung-Optimized-Performance-Expandable-Speakers/dp/B0FVXMHHRP/ref=sr_1_3?crid=1O61JU9G8DB6G&dib=eyJ2IjoiMSJ9.5_ONH3J0QLKjkKAl3wby7A5kcFypTvTNeRAc7FjRS9NNT7ZLq8jupHI1zJdFsdbvTigBXU9bo83a0LwEvwMaPHPBvxlJZpQB4nt3Mx2inVUH3vOnGUcfIl150sfS9ce_5Ly1LFV1ll-xwhwrG-BX0uh5-HLQURNvRIvRMqhLgoXfX5Mc6aOK9pVNH0caVIfKLBkp49quiUALe7_Ae5ZQ-ULxyuvRteZGN5dwwRE98TA.u9AKC6yXp-fjErgBU-vCYEIbmJbmpBrlbhe-TqDxe7Q&dib_tag=se&keywords=tablet&qid=1771317331&sprefix=tabl%2Caps%2C366&sr=8-3&th=1'  
    }, {
      id: 6,
      name: 'Camera',
      description: 'A high-resolution camera for photography enthusiasts',      
      price: 900,
      rating: 4.8,
      image: ['/assets/camera.png'],
      link: 'https://www.amazon.com/Canon-DSLR-Camera-EF-S-18-55mm/dp/B07P6Y8V9Z'
    }, {
      id: 7,
      name: 'Gaming Console',
      description: 'A powerful gaming console for immersive gaming experience',
      price: 400,
      rating: 4.7,
      image: ['/assets/console.png'],
      link: 'https://www.amazon.com/PlayStation-5-Console/dp/B09DFCB66S/ref=sr_1_1?dib=eyJ2IjoiMSJ9.7n5sXo3lHjKqk0mLh7uQeXoGg5c8v2a3zjN8sTt9i7b2n9r3A4yXoQO0w6fXh1u5e5c2sWlHjKqk0mLh7uQeXoGg5c8v2a3zjN8sTt9i7b2n9r3A4'
    }, {
      id: 8,
      name: 'Bluetooth Speaker',
      description: 'A portable Bluetooth speaker with excellent sound quality',
      price: 150,
      rating: 4.5,
      image: ['/assets/speaker.png'],
      link: 'https://www.amazon.com/Bluetooth-Speaker-Waterproof-Portable-Bluetooth/dp/B0B8Z9Z3KX/ref=sr_1_1?dib=eyJ2IjoiMSJ9.7n5sXo3lHjKqk0mLh7uQeXoGg5c8v2a3zjN8sTt9i7b2n9r3A4yXoQO0w6fXh1u5e5c2sWlHjKqk0mLh7uQeXoGg5c8v2a3zjN8sTt9i'
    }, 
    {
      id: 9,
      name: 'External Hard Drive',
      description: 'A high-capacity external hard drive for data storage',
      price: 100,
      rating: 4.3,
      image: ['/assets/harddrive.png'],
      link: 'https://www.amazon.com/Seagate-Portable-External-Hard-Drive/dp/B07CRG94G3'
    }, {
      id: 10,
      name: 'Wireless Mouse',
      description: 'A wireless mouse with ergonomic design',
      price: 50,
      rating: 4.4,
      image: ['/assets/mouse.png'],
      link: 'https://www.amazon.com/Logitech-Wireless-Mouse-Ergonomic-Design/dp/B07YVZQ9ZP'
    }
  ];
}