const productsContainer = document.getElementById('productsContainer');

async function fetchProducts() { 
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        productsContainer.innerHTML = '';
        products.forEach(product => {
        const productCard = `
            <div class="product">
                <img src="${product.image}" >
                <h2>${product.title}</h2><hr>
                <p>${product.description}</p>
                <p>Prix: ${product.price} $</p>
            </div>
        `;
        productsContainer.innerHTML += productCard;
    });
}



fetchProducts();
