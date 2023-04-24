async function getProducts() {
    const response = await fetch('http://localhost:3000/products');
    const data = await response.json();
    
    const tableBody = document.getElementsByTagName('tbody')[0];

    data.forEach(product => {
        const row = document.createElement('tr');

        const productIdTd = document.createElement('td');
        productIdTd.textContent = product.id;

        const productNameTd = document.createElement('td');
        productNameTd.textContent = product.name;

        const productPriceTd = document.createElement('td');
        productPriceTd.textContent = product.price;

        const productQuantityTd = document.createElement('td');
        productQuantityTd.textContent = product.amount;

        const productDescriptionTd = document.createElement('td');
        productDescriptionTd.textContent = product.description;

        const productActionsTd = document.createElement('td');
        productActionsTd.classList.add('productOptions');

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.classList.add('editButton');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.classList.add('deleteButton');

        productActionsTd.appendChild(editButton);
        productActionsTd.appendChild(deleteButton);

        row.appendChild(productIdTd);
        row.appendChild(productNameTd);
        row.appendChild(productPriceTd);
        row.appendChild(productQuantityTd);
        row.appendChild(productDescriptionTd);
        row.appendChild(productActionsTd);

        tableBody.appendChild(row);
    });
}

window.addEventListener('load', () => {
    getProducts();
});