import User from './src/User';
import Item from './src/Item';
import Shop from './src/Shop';

const shop = new Shop();

const item1 = new Item('Item 1', 'Description of Item 1', 10, 'uuid1');
const item2 = new Item('Item 2', 'Description of Item 2', 15, 'uuid2');
shop.addItem(item1);
shop.addItem(item2);


const shopArea = document.getElementById('shop-area');

shop.getItems().forEach((item) => {
    const itemElement = item.itemElement();
    shopArea?.appendChild(itemElement);
});

const loginForm = document.getElementById('login-form');

loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    User.loginUser(e);
});

shop.updateCart();

// It was going to be used but it cannot be declared as block-scope variable
// const user = new User('Linda Belcher', 44);
// const user = new User('Lois Griffin', 44);
// const user = new User('Francine Smith', 39);
// const user = new User('Marge Simpson', 36);
// These 4 characters are from Bob's Burgers, Family Guy, American Dad, and The Simpsons. They do grocery shopping, married and have children.
