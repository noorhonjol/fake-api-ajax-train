const createProductCard = ({image,title,id,price})=>{
    const productCard=document.createElement('div');
    productCard.className="newdiv";
    
    const productImg = document.createElement("img");
    productImg.src=image;
    productCard.appendChild(productImg)
    
    const productTitle = document.createElement("p");
    productTitle.textContent= title;   
    productCard.appendChild(productTitle)

    const productPrice=document.createElement("p");
    productPrice.textContent=`the price is: ${price}`;   
    productCard.appendChild(productPrice)

    const productLink=document.createElement("a");
    productLink.textContent="go to product"
    productLink.href=`/product.html?id=${id}`;
    productCard.appendChild(productLink)

    return productCard
}

const productDetailsCard = ({image, title, price, description, rating}) => {
    const productDetailsCard = document.createElement('div');
    productDetailsCard.className="product"
    
    const productImg = document.createElement("img");
    productImg.className = "product-image";
    productImg.src = image;
    productDetailsCard.appendChild(productImg);

    const productTitle = document.createElement("p");
    productTitle.className = "product-title";
    productTitle.textContent = title;
    productDetailsCard.appendChild(productTitle);

    const productPrice = document.createElement("p");
    productPrice.className = "product-price";
    productPrice.textContent = `Price: $${price}`;
    productDetailsCard.appendChild(productPrice);

    const productDescription = document.createElement("p");
    productDescription.className = "product-description";
    productDescription.textContent = description;
    productDetailsCard.appendChild(productDescription);

    const productRating = document.createElement("p");
    productRating.className = "product-rating";
    productRating.textContent = `Rating: ${rating.rate}`;
    productDetailsCard.appendChild(productRating);

    return productDetailsCard;
}

window.onload=async ()=>{
    const {pathname} = window.location
    if(pathname === '/index.html'){
        const productContainer = document.getElementById("products-list");
        const response = await fetch("https://fakestoreapi.com/products")
        const products = await response.json()
        products.forEach(product => {
            productContainer.appendChild(createProductCard(product))
        });
    }
    else if(pathname === '/product.html' ){
        const productId=window.location.search.split('=')[1]
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const product = await response.json()
        document.body.appendChild(productDetailsCard(product))
    }
    
}