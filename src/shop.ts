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

    static createShopAndCart() {
        const shop = new Shop();
        const cartDiv = document.createElement('div');
        cartDiv.id = 'cart-area';
        document.body.appendChild(cartDiv);
    }
}

// This is removed due to being a duplicate.
//     static loginUser(event) {
//         event.preventDefault();
//         const nameInput = document.getElementbyId('name');
//         const ageInput = document.getElementbyId('age');
//         const name = nameInput.value.trim();
//         const age = parseInt(ageInput.value.trim());
      
//         if (name && age) {
//           const user = new User("Marge Simpson", 36);
//           Shop.myUser = user;
//           Shop.createShopAndCart();
//         }
//       }
