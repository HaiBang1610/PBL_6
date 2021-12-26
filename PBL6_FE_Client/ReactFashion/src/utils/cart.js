class Cart {
    getCart() {
        let cart = localStorage.getItem('cart');

        return JSON.parse(cart);
    }

    addCart(item, quantity) {
        let cart = localStorage.getItem('cart');
        if (cart) {
            const cartTempt = JSON.parse(cart);

            const index = cartTempt.findIndex(
                (ele) => ele.item.idGoods == item.idGoods
            );

            if (index === -1) cartTempt.push({ item, quantity });
            else cartTempt[index].quantity += quantity;
            localStorage.setItem('cart', JSON.stringify(cartTempt));
        } else {
            cart = [{ item, quantity }];
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }
}

export default new Cart();
