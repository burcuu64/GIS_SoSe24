document.addEventListener('DOMContentLoaded', function() {
    // Container für die neuen Produkte im Hauptbereich der Einkaufsliste
    const productContainer = document.getElementById('product-container');

    // Produkte aus dem Local Storage abrufen
    const products = JSON.parse(localStorage.getItem('products')) || [];

    // Produkte anzeigen
    products.forEach((product, index) => {
        const productBox = document.createElement('div');
        productBox.className = 'product-box';
        
        productBox.innerHTML = `
            <strong>${product.name}</strong>
            <p>Preis: ${product.price}€</p>
            <p><img src="${product.image}" alt="Produktbild"></p>
            <button type="button" class="button_löschen" data-index="${index}">Löschen</button>
        `;

        productContainer.appendChild(productBox);
    });

    
    // Löschen-Button-Ereignis
    document.querySelectorAll('.button_löschen').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');

            // Produkt aus dem Array entfernen
            products.splice(index, 1);

            // Local Storage aktualisieren
            localStorage.setItem('products', JSON.stringify(products));

            // Produktbox aus der Anzeige entfernen, ohne die Seite neu zu laden
            this.parentNode.remove();
        });
    });
});
