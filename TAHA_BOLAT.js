(async() => {
    let style = document.createElement('style');
    style.textContent = `@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
    .carousel-wrapper {
        max-width: 1600px;
        margin: 30px auto;
    }
    .product-carousel {
        width: max-content;
        margin: 0 auto;
        height: 100%;
        position: relative;
    }
    .product-carousel > h2{
        font-size: 24px;
        font-weight: 600;
        color: rgb(43, 47, 51);
        margin-bottom: 18px;
    }
    .product-carousel__slide {
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .product-carousel__prev-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -60px;
        background: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: inset 0 6px 2px 0 #b0b0b003,0 2px 9px 0 #b0b0b014,0 2px 4px 0 #b0b0b024,0 0 1px 0 #b0b0b03d,0 0 1px 0 #b0b0b047;
    }
    .product-carousel__prev-btn::after {
        content: url('https://cdn06.e-bebek.com/assets/toys/svg/arrow-left.svg');
        position: absolute;
        font-size: 22px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .product-carousel__next-btn {
        position: absolute;
        right: -60px;
        top: 50%;
        transform: translateY(-50%);
        background: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: inset 0 6px 2px 0 #b0b0b003,0 2px 9px 0 #b0b0b014,0 2px 4px 0 #b0b0b024,0 0 1px 0 #b0b0b03d,0 0 1px 0 #b0b0b047;
    }
    .product-carousel__next-btn::after {
        content: url('https://cdn06.e-bebek.com/assets/toys/svg/arrow-right.svg');
        position: absolute;
        font-size: 22px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .product-carousel__products {
        width: 1264px;
        height: 100%;
        overflow-x: hidden;
        scroll-behavior: smooth;
        display: flex;
        align-items: center;
        gap: 16px;
    }
    .product-carousel__product {
        background: white;
        display: flex;
        flex-direction: column;
        height: 400px;
        width: 240px;
        flex-shrink: 0;
        position: relative;
        border: 1px solid lightgray;
        border-radius: 10px;
        cursor: pointer;
    }
    .product-carousel__product:hover {
        border: 1px solid #7d7d7d;;
    }
    .product-carousel__product-image {
        width: 100%;
        height: 200px;
        position: relative;
    }
    .product-carousel__product-image img{
        width: 100%;
        height: 100%;
        object-position: center;
        border-radius: 10px 10px 0 0;
    }
    .product-carousel__product-image i{
        position: absolute;
        top: 10px;
        right: 10px;
        width: 15px;
        height: 15px;
        background: url('https://cdn06.e-bebek.com/assets/toys/svg/heart-outline.svg') no-repeat center center;
        background-size: contain;
        cursor: pointer;
    }
    .product-carousel__product-image i:hover{
        position: absolute;
        top: 10px;
        right: 10px;
        width: 15px;
        height: 15px;
        background: url('https://cdn06.e-bebek.com/assets/toys/svg/heart-orange-outline.svg') no-repeat center center;
        background-size: contain;
        cursor: pointer;
    }
    .product-carousel__product-image i.selected{
        position: absolute;
        top: 10px;
        right: 10px;
        width: 15px;
        height: 15px;
        background: url('https://cdn06.e-bebek.com/assets/toys/svg/heart-orange-filled.svg') no-repeat center center;
        background-size: contain;
        cursor: pointer;
    }
    .product-carousel__product-details {
        width: 100%;
        height: 100%;
        padding: 0 10px 13px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 0 0 10px 10px;
    }
    .product-carousel__product-brand {
        font-size: 12px;
        font-weight: 600;
        color: rgb(43, 47, 51);
        line-height: 16px;
    }
    .product-carousel__product-brand span {
        font-weight: 500;
    }
    .product-carousel__product-price-info {
        padding: 6px 10px 15px;
    }
    .product-carousel__product-old-price {
        color: rgb(162, 177, 188);
        font-weight: 600;
        margin-right: 8px;
        text-align: start;
    }
    .product-carousel__product-discount.hidden{
        display: none;
    }
    .product-carousel__product-discount-rate.positive{
        background-color: rgb(0, 163, 101);
        color: white;
        border-radius: 16px;
        padding: 0 4px;
        font-size: 12px;
        font-weight: 600;
    }
    .product-carousel__product-discount-rate.negative{
        background-color: rgb(231, 6, 6);
        color: white;
        border-radius: 16px;
        padding: 0 4px;
        font-size: 12px;
        font-weight: 600;
    }
    .product-carousel__product-price {
        font-size: 20px;
        line-height: 20px;
        color: rgb(43, 47, 51);
        font-weight: 600;
    }

    .product-carousel__product-price.positive {
        font-size: 20px;
        line-height: 20px;
        color: rgb(0, 163, 101);
        font-weight: 600;
    }

    .product-carousel__product-price.negative {
        font-size: 20px;
        line-height: 20px;
        color: rgb(231, 6, 6);
        font-weight: 600;
    }
    .product-carousel__add-to-cart {
        position: absolute;
        top: calc(100% - 48px - 15px);
        right: 10px;
        width: 48px;
        height: 48px;
        background: white;
        border-radius: 50%;
        box-shadow: 0 6px 2px 0 #b0b0b003,0 2px 9px 0 #b0b0b014,0 2px 4px 0 #b0b0b024,0 0 1px 0 #b0b0b03d,0 0 1px 0 #b0b0b047;
        cursor: pointer;
    }
    .product-carousel__add-to-cart::after {
        content: url('https://cdn06.e-bebek.com/assets/toys/svg/plus-blue.svg');
        position: absolute;
        font-size: 11px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .product-carousel__add-to-cart:hover {
        background: #0091d5;
    }
    .product-carousel__add-to-cart:hover::after {
        content: url('https://cdn06.e-bebek.com/assets/toys/svg/plus-white.svg');
    }
    @media(max-width: 1400px){
        .product-carousel__products{
            width: 1008px;
        }
    }
    @media(max-width: 1100px){
        .product-carousel__products{
            width: 752px;
        }
    }
    @media(max-width: 850px){
        .product-carousel__products{
            width: 496px;
        }
    }
    @media(max-width: 576px){
        .product-carousel__products{
            width: 240px;
        }

        .product-carousel__prev-btn{
            width: 30px;
            height: 30px;
            left: 0;
        }

        .product-carousel__next-btn{
            width: 30px;
            height: 30px;
            right: 0;
        }

        .product-carousel > h2{
            font-size: 20px;
            text-align: center;
        }
    }`;
    document.head.appendChild(style);

    let container = document.createElement('div');
    container.classList.add('carousel-wrapper');
    container.innerHTML = `<div class="product-carousel">
            <h2>Beğenebileceğinizi Düşündüklerimiz</h2>
            <div class="product-carousel__prev-btn"></div>
                <div class="product-carousel__slide">
                    <div class="product-carousel__products">
                        
                    </div>
                </div>
            <div class="product-carousel__next-btn"></div>
        </div>`;

    let target = document.querySelector(".Section1.has-components");
    target.appendChild(container);
    
        // Favoriye Ekleme/Çıkarma
        window.addToFavorites = function (id){
            let tempFavorites = JSON.parse(localStorage.getItem('my_favorites'));
            if(tempFavorites.includes(id)){
                tempFavorites = tempFavorites.filter(favId => favId !== id);
            }
            else{
                tempFavorites.push(id);
            }
            localStorage.setItem('my_favorites', JSON.stringify(tempFavorites));
            let icon = document.querySelector(`i[onclick="addToFavorites(${id})"]`);
            icon.classList.toggle('selected');
        }

        // Ürünleri alma
        let products = [];
        let myFavorites = [];
        if(localStorage.getItem('products')){
            products = JSON.parse(localStorage.getItem('products'));
            myFavorites = JSON.parse(localStorage.getItem('my_favorites'));
        }
        else {
            products = await fetch('https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json')
                                .then((res) => res.json());
            localStorage.setItem('products', JSON.stringify(products));
            localStorage.setItem('my_favorites', JSON.stringify([]));
            console.log(products);
        }

        // Ürünleri Sayfaya Ekleme
        let carouselProducts = document.querySelector('.product-carousel__products');
        for (let product of products) {
            let discountStatus = '';
            let discount = '';
            let iconEl = `<i onclick="addToFavorites(${product.id})"></i>`;

            if(product.price === product.original_price){
                discountStatus = `hidden`
            }
            else{
                if(product.price < product.original_price){
                    discount = 'positive';
                }
                else{
                    discount = 'negative';
                }
            }

            if(JSON.parse(localStorage.getItem('my_favorites')).includes(product.id)){
                iconEl = `<i class="selected" onclick="addToFavorites(${product.id})"></i>`;
            }

            let div = document.createElement('div');
            div.classList.add('product-carousel__product');
            div.innerHTML = `<div class="product-carousel__product-image">
                                    <img src="${product.img}">
                                    ${iconEl}
                                </div>
                                <div class="product-carousel__product-details">
                                    <h2 class="product-carousel__product-brand">${product.brand} - <span class="product-carousel__product-description">${product.name}</span></h2>
                                    <div class="product-carousel__product-price-info">
                                        <div class="product-carousel__product-discount ${discountStatus}">
                                            <span class="product-carousel__product-old-price">${product.original_price} TL</span>
                                            <span class="product-carousel__product-discount-rate ${discount}">%${(((product.original_price - product.price) / product.original_price) * 100).toFixed(0)}</span>
                                        </div>
                                        <span class="product-carousel__product-price ${discount}">${product.price} TL</span>
                                    </div>
                                </div>
                            <div class="product-carousel__add-to-cart"></div>`
            div.addEventListener('click', () => {
                window.open(product.url, '_blank');
            })
            carouselProducts.appendChild(div);
        }

        // Carousel Fonksiyonunu Oluşturma
        const carousel = document.querySelector('.product-carousel__products');
        const nextBtn = document.querySelector('.product-carousel__next-btn');
        const prevBtn = document.querySelector('.product-carousel__prev-btn');

        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: 256, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -256, behavior: 'smooth' });
        }); 
    
})();
