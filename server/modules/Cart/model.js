const Cart = function(currentCart){
    this.items = currentCart.items || [];
    this.totalQty = currentCart.totalQty || 0;
    this.totalPrice = currentCart.totalPrice || 0;

    this.add = function(item, id){
        var storedItem = this.items[id];
        if(!storedItem){
            storedItem = this.items[id] = {
                item: item,
                qty: 0,
                price: 0
            };
        }
        
        storedItem.qty++;
        storedItem.price = storedItem.item.Perfume_Price * storedItem.qty; 

        this.totalQty++;
        this.totalPrice += storedItem.item.Perfume_Price;
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