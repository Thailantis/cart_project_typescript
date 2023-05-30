from src import User
from src import Item
from src import Shop
import {v4 as uuidv4} from 'uuid';

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.cart = [];
}

static loginUser(event) {
  event.preventDefault();
  const nameInput = document.getElementbyId('name');
  const ageInput = document.getElementbyId('age');
  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value.trim());

  if (name && age) {
    const user = new User("Marge Simpson", 36);
    Shop.myUser = user;
    Shop.createShopAndCart();
  }
}

cartHTMLElement() {
    const cartDiv = document.createElement('div');
    cartDiv.id = 'cart-items';

    this.cart.forEach((item) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';

        const itemName = document.createElement('span');
        itemName.textContent = item.name;
        itemDiv.appendChild(itemName);

        const itemQuantity = document.createElement('span');
        itemQuantity.textContent = `Quantity: ${item.quantity}`;
        itemDiv.appendChild(itemQuantity);

        const itemPrice = document.createElement('span');
        itemPrice.textContent = `Price: ${item.price}`;
        itemDiv.appendChild(itemPrice);

        const removeOneButton = document.createElement('button');
        removeOneButton.textContent = 'Please remove one item from the shopping cart.';
        removeOneButton.id = `remove-one-${item.uuid}`;
        itemDiv.appendChild(removeOneButton);
      
        const removeAllButton = document.createElement('button');
        removeAllButton.textContent = 'Please remove all items from the shopping cart.';
        removeAllButton.id = `remove-all-${item.uuid}`;
        itemDiv.appendChild(removeAllButton);

        cartDiv.appendChild(itemDiv);
    });

    return cartDiv;
}

addRemoveEventListeners() {
    this.cart.forEach((item) => {
        const removeOneButton = document.getElementById('remove-one')
        const removeAllButton = document.getElementById('remove-all')

        removeOneButton.addEventListener('click', () => {
            this.removeQuantityFromCart(item);
        });

        removeAllButton.addEventListener('click', () => {
            this.removeFromCart(item);
        });
    });
}

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
    itemPrice.textContent = 'Add to Cart';
    itemDiv.appendChild(addToCartButton);

    addToCartButton.addEventListener('click', () => {
        Shop.myUser.addToCart(this);
        Shop.updateCart();
    });
    return itemDiv;
   }
}
