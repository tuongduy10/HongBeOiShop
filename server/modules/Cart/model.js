const Cart = function(currentCart){
    this.items = currentCart.items;
    this.totalQty = currentCart.totalQty;
    this.totalPrice = currentCart.totalPrice;

    this.add = function(item, id){
        var storedItem = this.items[id];
        if(!storedItem){
            this.items[id] = {
                item: item,
                qty: 0,
                price: 0
            }
            storedItem = this.items[id];
        }

        storedItem.qty++;
        storedItem.price = storedItem.qty * storedItem.item.price; 
        this.totalQty++;
        this.totalPrice += storedItem.price;
    }
    this.generateArray = function(){
        var arr = [];
        this.items.forEach(element => {
            arr.push(element);
        });
        return arr;
    }
}

module.exports = Cart