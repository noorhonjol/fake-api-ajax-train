if(window. location. pathname==='/index.html'){
    window.onload=()=>{
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            const text=JSON.parse(this.responseText);
            text.forEach(product=>{
                products=document.getElementById("demo");
                
                const NEwdiv=document.createElement('div');
                NEwdiv.className="newdiv";
                
                var img = document.createElement("img");
                img.src=product.image;
                
                var title = document.createElement("p");
                title.innerHTML=`${product.title}`;   

                var price=document.createElement("p");
                price.innerHTML=`the price is: ${product.price}`;   
                
                var linkToproduct=document.createElement("a");
                linkToproduct.innerHTML="go to product"
                linkToproduct.href=`/product.html?id=${product.id}`;

                
                NEwdiv.appendChild(img)
                
                NEwdiv.appendChild(title)

                NEwdiv.appendChild(price)
                
                NEwdiv.appendChild(linkToproduct)

                products.appendChild(NEwdiv)
            })
        }
        xhttp.open("GET", "https://fakestoreapi.com/products");
        xhttp.send();
    }
}
if(window. location.pathname==='/product.html' ){
        window.onload=()=>{
            xhl=new XMLHttpRequest();
            xhl.onload = function() {
                const text=JSON.parse(this.responseText);
                
                const theProduct=document.getElementById("product");
                
                const image=document.createElement("img");
                image.className="product-image";
                image.src=text.image;

                const title=document.createElement("p");
                title.className="product-title";
                title.innerHTML=text.title;

                const price=document.createElement("p")
                price.className="product-price"
                price.innerHTML=text.price;

                
                const description=document.createElement("p")
                description.className="product-description"
                description.innerHTML=text.description;
                
                const rating=document.createElement("p")
                rating.className="product-rating"
                rating.innerHTML=text.rating.rate;

                theProduct.appendChild(image)
                theProduct.appendChild(title)
                theProduct.appendChild(price)
                theProduct.appendChild(description)
                theProduct.appendChild(rating)
            }
            
            xhl.open("GET", `https://fakestoreapi.com/products/${window.location.search.split('=')[1]}`);
            xhl.send();
        }
    }