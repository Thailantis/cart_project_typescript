class Item {
    constructor(name, description, price, uuid) {
      this.name = name;
      this.description = description;
      this.price = price;
      this.uuid = uuid;
}

itemElement() {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';

    const itemName = document.createElement('h3');
    itemName.textContent = this.name;
    itemDiv.appendChild(itemName);

    const itemDescription = document.createElement('p');
    itemDescription.textContent = this.description;
    itemDiv.appendChild(itemDescription);

    const itemPrice = document.createElement('p');
    itemPrice.textContent = `Price: $${this.price}`;
    itemDiv.appendChild(itemPrice);

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    itemDiv.appendChild(addToCartButton);

    addToCartButton.addEventListener('click', () => {
        Shop.myUser.addToCart(this);
        Shop.updateCart();
    });
    return itemDiv;
   }
}
