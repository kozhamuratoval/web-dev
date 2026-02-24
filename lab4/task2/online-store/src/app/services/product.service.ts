import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  categories: Category[] = [
    { id: 1, name: 'Laptops & Computers' },
    { id: 2, name: 'Smartphones & Tablets' },
    { id: 3, name: 'Audio & Headphones' },
    { id: 4, name: 'Gaming & Electronics' }
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      description: 'A high-performance laptop',
      price: 1200,
      rating: 4.5,
      image: ['/assets/laptop.png'],
      link: 'https://www.amazon.com/BiTECOOL-Laptop-Display-Fingerprint-Battery/dp/B0FYDR6LYN/ref=sr_1_1_sspa?adgrpid=161033438092&dib=eyJ2IjoiMSJ9.9xbT55RN9LFMgiLiodS9Ju5eXzPgli3Hhh-7K8oslJUQrIqiVaC7Ks4i7VzENvZy-o2MrYJ1PAx61WYN-MEBSFG_pUlmOJeO5q7BWBLSs15vBeowiEp1KPjtPMKZjiPa1Sr9KACag4l6xIgux0EFBkSxd_njQHiARm8d17GNBJcxDAteEfCsRiUWtkjB4o9XL_WoBOf8b3jtJt9bs0xnbSfBzW7eDsij7VPB23N-WDo.QJYdLol19uBo_9zRk4Kl3CUjGDDQnAUr117lUBUFVtE&dib_tag=se&hvadid=681337568802&hvdev=c&hvlocphy=9198010&hvnetw=g&hvqmt=b&hvrand=2599588442065365355&hvtargid=kwd-2400333233402&hydadcr=21438_13508877&keywords=laptops+clearance+2025&mcid=422f6a6f42de30549dabf0d8921fda71&qid=1771313787&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1',
      likes: 0,
      categoryId: 1
    },
    {
      id: 9,
      name: 'External Hard Drive',
      description: 'A high-capacity external hard drive for data storage',
      price: 100,
      rating: 4.3,
      image: ['/assets/harddrive.png'],
      link: 'https://www.amazon.com/Seagate-Portable-External-Hard-Drive/dp/B07CRG94G3',
      likes: 0,
      categoryId: 1
    },
    {
      id: 10,
      name: 'Wireless Mouse',
      description: 'A wireless mouse with ergonomic design',
      price: 50,
      rating: 4.4,
      image: ['/assets/mouse.png'],
      link: 'https://www.amazon.com/Logitech-Wireless-Mouse-Ergonomic-Design/dp/B07YVZQ9ZP',
      likes: 0,
      categoryId: 1
    },
    {
      id: 11,
      name: 'Mechanical Keyboard',
      description: 'RGB mechanical gaming keyboard with blue switches',
      price: 80,
      rating: 4.6,
      image: ['/assets/mechanickey.png'],
      link: 'https://www.amazon.com/Redragon-K556-PRO-Mechanical-Connection/dp/B0BLYKTL78/ref=sr_1_2_sspa?crid=35P587LVDLXUM&dib=eyJ2IjoiMSJ9.yMnOOyHU6UnD4V_C2a-85uGvirKJYGN9AHCGacrei6sHq5-CMhraDJwmqEOQ-lsH_GqaqdDdEjhvvXpfIwYvoiY54nvBG9Ux44-xegamoDDXqsioZJV9sJd7IuDMe5O_u6DmfPeWxjakZkaiprWPFkm75ENFCWyeDOyUGW0otTxhAK1sTq_mUiWbihLPIiV1qKnqGTjGl1xhX1pZQdIh30Gs8C5Nr7nY_SRQGe2JAWQ.Wm8eqwWbZimhOrLnH4f4kCaJskmBAdZVQhXvt9yeFnQ&dib_tag=se&keywords=Mechanical%2BKeyboard&qid=1771922996&sprefix=mechanical%2Bkeyboard%2Caps%2C365&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1',
      likes: 0,
      categoryId: 1
    },
    {
      id: 12,
      name: 'USB-C Hub',
      description: 'Multi-port USB-C hub with HDMI and card reader',
      price: 35,
      rating: 4.2,
      image: ['/assets/usbhub.png'],
      link: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo4Nzk5MTUxNjczNTQwMDk3OjE3NzE5MjMwOTQ6c3BfYXRmOjMwMTE1NzYxNzU1ODIwMjo6MDo6&url=%2FDocking-Station-Charging-MacBook-Windows%2Fdp%2FB0G8Z2X9YD%2Fref%3Dsr_1_2_sspa%3Fcrid%3D1J0162WYDJ6U9%26dib%3DeyJ2IjoiMSJ9.hZ6wE2L7xe2Dzcf73k6vBmD_O0UK4ArAOUUfEVL6_nYwrMN20H_VGlTzAr-OeWuS74B9Bmz2zEz2SgAgqARiVJaqm4FgcFDeMEFl7boNm82-s8y5MWsIqy3jUiuIxPrqZFx1NhayV-X1UpJfyNAsZxnSSI4Bu4TvsxgsH9Sdg0IEnoOwA2wjJX-NNEaB3NZYK25UgbrGoa07DAHltfd1hLgrlJAq30y3mIE-myTU6o0.UIXI5L_heNZCVl_g7QrElZ4MOJixqvAK6AUE8E-UMAU%26dib_tag%3Dse%26keywords%3DUSB-C%2BHub%26qid%3D1771923094%26sprefix%3Dusb-c%2Bhub%252Caps%252C352%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1',
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: 'Smartphone',
      description: 'Latest smartphone with advanced features',
      price: 800,
      rating: 4.7,
      image: ['/assets/phone.png'],
      link: 'https://www.amazon.com/Apple-iPhone-16-Pro-Max/dp/B0DHJ896RY/ref=sr_1_24?dib=eyJ2IjoiMSJ9.7bWVw-IThnMUIya2Bwdu3dpY0DPIdXHiNiLtqM-Hcu7BGrtaS5sL4Jlt28gBncH2247LBe_BMOVC6ajvcFvSimjFruyArqCA1qQGrif1W94no25ll27QoixSWNRg_OxlUOHNFNxZLXSD9TW7E7X8oqKkHxjk800TzaIgVq5rkzwmHNfbOl0sjhUmejCM2Yqz.db3ebYdIklkQiHnoTQCuJi1nyZSNw7NjZQlM0LEcta0&dib_tag=se&keywords=iphone&qid=1771317267&sr=8-24&xpid=JAeBx2HVXPE45&th=1',
      likes: 0,
      categoryId: 2
    },
    {
      id: 5,
      name: 'Tablet',
      description: 'A lightweight tablet for work and entertainment',
      price: 500,
      rating: 4.4,
      image: ['/assets/tablet.png'],
      link: 'https://www.amazon.com/Samsung-Optimized-Performance-Expandable-Speakers/dp/B0FVXMHHRP/ref=sr_1_3?crid=1O61JU9G8DB6G&dib=eyJ2IjoiMSJ9.5_ONH3J0QLKjkKAl3wby7A5kcFypTvTNeRAc7FjRS9NNT7ZLq8jupHI1zJdFsdbvTigBXU9bo83a0LwEvwMaPHPBvxlJZpQB4nt3Mx2inVUH3vOnGUcfIl150sfS9ce_5Ly1LFV1ll-xwhwrG-BX0uh5-HLQURNvRIvRMqhLgoXfX5Mc6aOK9pVNH0caVIfKLBkp49quiUALe7_Ae5ZQ-ULxyuvRteZGN5dwwRE98TA.u9AKC6yXp-fjErgBU-vCYEIbmJbmpBrlbhe-TqDxe7Q&dib_tag=se&keywords=tablet&qid=1771317331&sprefix=tabl%2Caps%2C366&sr=8-3&th=1',
      likes: 0,
      categoryId: 2
    },
    {
      id: 4,
      name: 'Smartwatch',
      description: 'A smartwatch with fitness tracking features',
      price: 250,
      rating: 4.6,
      image: ['/assets/smartwatch.png'],
      link: 'https://www.amazon.com/Receive-Fitness-Tracking-Waterproof-Smartwatch/dp/B0BFQ36XPW/ref=sr_1_1_sspa?dib=eyJ2IjoiMSJ9.xO1TkKp_PrtMwcpEPVIaUhIP8P4UdF3f0ZWfBkNngwgICoV10ly6XFmB05Cu0ZfueUnDmf-Xh21LOIjh4e5OJFFMsh3X27IwBzc_Y_qe6lCYd5YkMqf9pvkUmQpEEHSj0kK9FDoBTA2_83PApu3hK7Zq5sHKKY7DeUuPSjddI0v6yHOGnOoCSeAbocTZGJ1VGxXEpj2OLNTUdxeiuauQv4bUtPy_fAz3sN2DR6VKEVs.gGXam0NOMBJCETDywyk2Rbmv2LaVg4wHI5d4i41Ud44&dib_tag=se&keywords=smart%2Bwatch&qid=1771313982&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1',
      likes: 0,
      categoryId: 2
    },
    {
      id: 13,
      name: 'Phone Case',
      description: 'Protective phone case with screen protector',
      price: 25,
      rating: 4.5,
      image: ['/assets/phonecase.png'],
      link: 'https://www.amazon.com/FNTCASE-iPhone-15-Case-Matte/dp/B0DFH8SNK5/ref=sr_1_6?crid=1UF5X1CQ06KES&dib=eyJ2IjoiMSJ9.AqRnJtlK3jBhtWhm28PsQ9oFhvVX-EeT7cvDkkjm9h2w8wSu2gXaJ6wy5RXNKStMz-c_E8rhax6INOCGzVtMOwKvZ2UFB6NWaUa0Wz52suBkeS0q6uuLyHnrV_jC3wOCiDeFEDoAUTEImeGHU5Nlft7yFwM4nuoa_oK_S6te30jQd6wDy4PNybRZ2PA_J1l9SkhGA4yHclMbgVadX4lwTBlMtP9v4vNo_3xqoJYdVGI.1heQ6Oj_ij6BAX0zZ7VeSz9WJTFtTZnBWmZ8_GAXOec&dib_tag=se&keywords=Phone+Case&qid=1771923185&sprefix=phone+case%2Caps%2C387&sr=8-6',
      likes: 0,
      categoryId: 2
    },
    {
      id: 14,
      name: 'Tablet Stand',
      description: 'Adjustable tablet stand for desk use',
      price: 30,
      rating: 4.3,
      image: ['/assets/tabletstand.png'],
      link: 'https://www.amazon.com/Tablet-Stand-Adjustable-Lamicall-Reader/dp/B01DBV1OKY/ref=sr_1_3?crid=2F0E6HTOOAHY5&dib=eyJ2IjoiMSJ9.u-FUM2pyxZeryWE5v4pdz2qtUOK3IEpZRPS-59xUg_H2cVQZq-XA8V-5tk_F2NwFc1UhKfYNN4Qfi92PtloS6zH8q3WFh-Vez_w_b0v4CC8027wNKOAAAQ6wCa96bRdBBOrhGPakHgza7yjnPaKTnR30TJ7Ko15CiKuFy7s2AEYOcuiycjTBMu1b0OA-c61Ht_9fCbBXwYUFkzloq823KIACHoRKNdWp_BtoVWKAY14.cJZV3ZjRUiAV2_FqDwVepdSRTjx1Ul-0zFQqMNfsHA0&dib_tag=se&keywords=Tablet+Stand&qid=1771923244&sprefix=earbuds%2Caps%2C549&sr=8-3',
      likes: 0,
      categoryId: 2
    },
    {
      id: 3,
      name: 'Headphones',
      description: 'Noise-cancelling over-ear headphones',
      price: 200,
      rating: 4.3,
      image: ['/assets/headphones.png'],
      link: 'https://www.amazon.com/Sony-Canceling-Wireless-Headphones-Comfortable/dp/B0CWVX1GNX/ref=sr_1_1?dib=eyJ2IjoiMSJ9.ghh1PULtdxDpLebPQKkASEmTj1FxI81iSoCe23TgrwgF72EnlHK9D7mAI-chS9_ePCsVe58_JyNBBufe3Fxx4CfZC9oKcTWFxgZRswwm_hLAd4D6beyFKd2sHy9YAAIU2yW4vVILLYfgDM49nKrivpiR1R4Rsa3hxwi3FuqDwtLRaXfbaY56EAdfp0w0QqvBi9oVdUaOTE0ktRAbsGDyTn7Gh38clFIynwpJuzSzQ7M.yrJTlA6mlNS5tN7CuThOFO15rm-hrxyTU7Rym4Jsy9A&dib_tag=se&keywords=headphones&qid=1771313944&sr=8-1&th=1',
      likes: 0,
      categoryId: 3
    },
    {
      id: 8,
      name: 'Bluetooth Speaker',
      description: 'A portable Bluetooth speaker with excellent sound quality',
      price: 150,
      rating: 4.5,
      image: ['/assets/speaker.png'],
      link: 'https://www.amazon.com/Bluetooth-Speaker-Waterproof-Portable-Bluetooth/dp/B0B8Z9Z3KX/ref=sr_1_1?dib=eyJ2IjoiMSJ9.7n5sXo3lHjKqk0mLh7uQeXoGg5c8v2a3zjN8sTt9i7b2n9r3A4yXoQO0w6fXh1u5e5c2sWlHjKqk0mLh7uQeXoGg5c8v2a3zjN8sTt9i',
      likes: 0,
      categoryId: 3
    },
    {
      id: 15,
      name: 'Earbuds',
      description: 'Wireless earbuds with noise cancellation',
      price: 120,
      rating: 4.4,
      image: ['/assets/earbuds.png'],
      link: 'http://amazon.com/AmazonBasics-Ear-Headphones-Mic-Black/dp/B07HH1QSLB/ref=sr_1_1_ffob_sspa?crid=KYJR8V63A4LU&dib=eyJ2IjoiMSJ9.73whkuLoSLSylnBxKtLYuQYKgO4XOrNuWq9O_6I9pJQlyAbRjzOSYjIMxo7jJkG7TCWklPTJz7n2wfdEp3PB_g7lZuiKgqbHQMqRFRSDtfhpDQiyAKXXVPGVXg9814F5vDdLhgNE43U7DP1AgfZLRTfyNZswOda0MjUppvxkwaBfYW6x9NImwzp4ntIJueNWup5gA5osFPr_26Qsvt5TD4gN7Ba6cVKsvPHWT4Pm7s4.Rft4vDH3_-mdPHb7kEnpNe56Yg0cmJjEVsvGXeeY2x0&dib_tag=se&keywords=earbuds&qid=1771922904&sprefix=earbu%2Caps%2C315&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1',
      likes: 0,
      categoryId: 3
    },
    {
      id: 16,
      name: 'Microphone',
      description: 'USB condenser microphone for streaming and recording',
      price: 90,
      rating: 4.6,
      image: ['/assets/microphone.png'],
      link: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo1ODczMjMzMTk5NDI0ODU1OjE3NzE5MjI4MDY6c3BfYXRmOjMwMDM4NjIxNDE1NzQwMjo6MDo6&url=%2FAmazon-Basics-Microphone-Podcasting-Adjustable%2Fdp%2FB0CL9BTQRF%2Fref%3Dsr_1_1_ffob_sspa%3Fcrid%3DI8GJF0VV8VXE%26dib%3DeyJ2IjoiMSJ9.Q4besN_nv80RXgwsqPLNCwiLd4m8eQrc5QICL58e-M5YQ2_vsWYnmL0Vi8LJg2q9_O3rCIVTNpiSGSN_fA1Ut9EN269YINWWZLRw0jCc8SzR3qrN6UJR7-cd1W1W5HoiZU1B_kIJ0lueJrCDZ1PlE26M7wfFLPqfIQdEwAau8gAlprRe5G0oiMxQ_WbmDGqUsKt65M14QUUqlqHfQRWKgI9V4vGq5KVU6lLs9RE3xE15zvsJ7_lHsasMpCyk7FrQrO1EQ64bPzv2CtCYiasy_AzRvuWmo9cl8LCKWOeMb3c.oaO-a0I_vzDdedWQvuVY2LWt22Mdg-cM7KZWkgy6FxM%26dib_tag%3Dse%26keywords%3Dmicrophone%26qid%3D1771922806%26sprefix%3Dmicrop%252Caps%252C317%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1',
      likes: 0,
      categoryId: 3
    },
    {
      id: 17,
      name: 'Audio Interface',
      description: 'USB audio interface for music production',
      price: 130,
      rating: 4.5,
      image: ['/assets/audiointerface.png'],
      link: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MToxOTgzMzQ2ODA4NjQ1MDU5OjE3NzE5MjI5NDA6c3BfYXRmOjMwMDM4ODExMzA5NzYwMjo6MDo6&url=%2FCONNECT-user-friendly-Interface-sensational-Compressor%2Fdp%2FB0CZJ4M89S%2Fref%3Dsr_1_4_sspa%3Fcrid%3D2RHT8U10OXGDM%26dib%3DeyJ2IjoiMSJ9.Tul20k-QOwXpseDZ8mwuFjyMFsg5KMv2dgL1awklS7oXKWzpKqrNTGABiLcAIbBlScYhVpSmcWZzdylK4oQZ6vZUB4ebz1qRM5dPOhEpSPx9U53vnBNbymu5t-1GtjDWNBdkUf9fCAEAngZM3CixM9e4u2qboZxvNZBLQcCZq7LZ7aRNZYg39hClGF9T5Or-6Ho_JbxtsgW9PjfSQ4U-LCNqi4mL7SYZmYtvM1OSFl6mugWsROFcLa9ifBCr5vJzAj0-ArWMuh0Ef5vf6TAC6k5xlfncWTx6abPDT1sqClw.0U4I5n9Jsk9OsnnLdp-6PtcU-1eES7DDaEM-3lKFuYs%26dib_tag%3Dse%26keywords%3DAudio%2BInterface%26qid%3D1771922939%26sprefix%3Daudio%2Binterface%252Caps%252C321%26sr%3D8-4-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1',
      likes: 0,
      categoryId: 3
    },
    {
      id: 7,
      name: 'Gaming Console',
      description: 'A powerful gaming console for immersive gaming experience',
      price: 400,
      rating: 4.7,
      image: ['/assets/console.png'],
      link: 'https://www.amazon.com/PlayStation-5-Console/dp/B09DFCB66S/ref=sr_1_1?dib=eyJ2IjoiMSJ9.7n5sXo3lHjKqk0mLh7uQeXoGg5c8v2a3zjN8sTt9i7b2n9r3A4yXoQO0w6fXh1u5e5c2sWlHjKqk0mLh7uQeXoGg5c8v2a3zjN8sTt9i7b2n9r3A4',
      likes: 0,
      categoryId: 4
    },
    {
      id: 6,
      name: 'Camera',
      description: 'A high-resolution camera for photography enthusiasts',
      price: 900,
      rating: 4.8,
      image: ['/assets/camera.png'],
      link: 'https://www.amazon.com/Canon-DSLR-Camera-EF-S-18-55mm/dp/B07P6Y8V9Z',
      likes: 0,
      categoryId: 4
    },
    {
      id: 18,
      name: 'Gaming Mouse',
      description: 'High-precision gaming mouse with RGB lighting',
      price: 60,
      rating: 4.7,
      image: ['/assets/mouse2.png'],
      link: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MToyMjY3MzU5NDI2MDgxMTM0OjE3NzE5MjMzNDM6c3BfYXRmOjIwMDA1OTYwNTY2NzIzMTo6MDo6&url=%2FRedragon-M612-Predator-Programmable-Software%2Fdp%2FB08SJ5Z8JL%2Fref%3Dsr_1_2_sspa%3Fcrid%3D17U8GG564SZV5%26dib%3DeyJ2IjoiMSJ9.mjrFpNdNfnaXrHFYm5w9XFirVJ9N0_WJIcQV2z8qg9T1UvcUUVaSu3BNtvUUgoidqBd402Dv8UsDK_G6yFcdgsQUhst7d9ANSgillxxIDmq3I1nSjfS6kQ-_sMyeiCPqvwVp_4QRscuK--RTH4n_2FwSMLKdIan7LYjy3Otvi7HJmCV7kgXPLI_UJaMG3v5-kMcvsnkNuE28dZWdNVCAPB2qVXSysw6obAH23sj687U.zYR6tUmMEanYIt20Awuzkr4tMxXAq5_rAOL7X0bHpdI%26dib_tag%3Dse%26keywords%3DGaming%2BMouse%26qid%3D1771923343%26sprefix%3Dgaming%2Bmouse%252Caps%252C466%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1',
      likes: 0,
      categoryId: 4
    },
    {
      id: 19,
      name: 'Webcam',
      description: 'HD webcam for video calls and streaming',
      price: 70,
      rating: 4.4,
      image: ['/assets/webcam.png'],
      link: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MTozNDg4MTQ2MjIyNDg2MzI6MTc3MTkyMzQwMDpzcF9hdGY6MjAwMDQ0Mjg4NDM0MzIxOjowOjo&url=%2FMicrophone-NexiGo-Computer-110-degree-Conferencing%2Fdp%2FB088TSR6YJ%2Fref%3Dsr_1_2_sspa%3Fcrid%3D1TDB3W70NRFJG%26dib%3DeyJ2IjoiMSJ9.dMAcblhCelHTgSm28qDzZYcog3gcEigT30oBE_6cJlVi3ZniGkEUSEUu0VR-yjugpex9cTrKhOUXFHA4KYaaVP7f5U3y7Vg-jvLJpKDRGHChcHIEO0YNDEcwsGDq909_fycviM-RYW_hSshbYF1aJ8WTdFKNCrZMtKUn4yCwjIEY_-XhMqvnAdC-WTAXVMU1UzVuzElXnjzB-3Z8yQ3dCi0iPM6vxxUs4_lCzOlKdvI.uJitgykXFWYX_F6dx05FQeg_o0NWt7Gv5dXd95_AD5U%26dib_tag%3Dse%26keywords%3DWebcam%26qid%3D1771923400%26sprefix%3Dwebcam%252Caps%252C326%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1',
      likes: 0,
      categoryId: 4
    },
    {
      id: 20,
      name: 'Action Camera',
      description: 'Waterproof action camera for sports and adventures',
      price: 180,
      rating: 4.6,
      image: ['/assets/actioncamera.png'],
      link: 'https://www.amazon.com/Insta360-Waterproof-Replaceable-Built-Stabilization/dp/B0DZCBYCNY/ref=sr_1_4?crid=2RPX7F920R21B&dib=eyJ2IjoiMSJ9.isnSCYuPd21yVRndaKyW9TE7w7tgSXzNR4LsZPq2V1_cjJq0K0npYBGA_SRuB6BSKXSx9nQ00zd3Ly-0E_JdTN4Tl3WwYYgmZv0nLoIirlqzc_AH1aaCkhp2KQW27mEiBr4S3hDZqMRgEnCPU3HqSHHLHI8oXkjArY9OZxz5F_JyFgrqILSTRzB_jQQpR3oh6vwHwFgOTQiawQZSYafpx-hv7929w-xirvnrYU3Fp8k.WyaIC4hVMJnWak9-KsC-CLf3LIY9YAexKBVjPSaRPUQ&dib_tag=se&keywords=Action+Camera&qid=1771923447&sprefix=action+camera%2Caps%2C357&sr=8-4',
      likes: 0,
      categoryId: 4
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(product => product.categoryId === categoryId);
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  deleteProduct(productId: number): void {
    const index = this.products.findIndex(p => p.id === productId);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  incrementLikes(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes++;
    }
  }
}

