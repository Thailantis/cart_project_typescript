import User from './User';
import Item from './Item';
import Shop from './Shop';

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
    addToCartButton.textContent = 'Add to Cart';
    itemDiv.appendChild(addToCartButton);

    addToCartButton.addEventListener('click', () => {
        Shop.myUser.addToCart(this);
        Shop.updateCart();
    });
    return itemDiv;
   }
}
class Shop {
    static myUser;
    items = [];

    constructor() {
        this.createItems();
        this.showItems();
        this.updateCart();
    }

    createItems() {
        const item1 = new Item('Item 1', 'Description of Item 1', 10, 'uuid1');
        const item2 = new Item('Item 2', 'Description of Item 2', 15, 'uuid2');
        const item3 = new Item('Item 3', 'Description of Item 3', 20, 'uuid3');
        const item4 = new Item('Item 4', 'Description of Item 4', 25, 'uuid4');
        const item5 = new Item('Item 5', 'Description of Item 5', 30, 'uuid5');
        const item6 = new Item('Item 6', 'Description of Item 6', 30, 'uuid6');

        this.items.push(item1, item2, item3, item4, item5, item6);
    }

    showItems() {
        const shopDiv = document.getElementById('shop-area');

        this.items.forEach((item) => {
            const itemElement = item.itemElement();
            shopDiv?.appendChild(itemElement);
        });
    }

    updateCart() {
        const cartDiv = document.getElementById('cart-area');
        cartDiv.innerHTML = '';

        if(!Shop.myUser || Shop.myUser.cart.length === 0) {
            cartDiv.textContent = 'Cart is empty';
        } else {
            const cartItemsElement = Shop.myUser.cartHTMLElement();
            cartDiv?.appendChild(cartItemsElement);
            Shop.myUser.addRemoveEventListener();
        }
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

    static createShopAndCart() {
        const shop = new Shop();
        const cartDiv = document.createElement('div');
        cartDiv.id = 'cart-area';
        document.body.appendChild(cartDiv);
    }
}
