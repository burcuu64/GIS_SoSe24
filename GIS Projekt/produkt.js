document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('product-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('product-name').value;
        const price = document.getElementById('product-price').value; 
        const image = document.getElementById('product-image').value;

        const product = { name, price, image };

        const products = JSON.parse(localStorage.getItem('products')) || [];
        products.push(product);

        localStorage.setItem('products', JSON.stringify(products));

       
        window.location.href = 'einkaufsliste.html';
    });
});
