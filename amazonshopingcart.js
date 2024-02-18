//samazon Shopping
const user={
    name:'Kim',
    active: true,
    cart:[],
    purchases:[]
}

const compose=(f,g) => (...args) => f(g(...args))

purchaseItem(
    emptycart,
    buyItem,
    applyTaxToItems,
    additemcart 
)(user,{name:'laptop', price:200})

function purchaseItem(...fns) { 
    return fns.reduce(compose)
}

function additemcart(user,item){
    const updatecart=user.cart.concat(item)
    return Object.assign({},user,{cart: updatecart})
}

function applyTaxToItems(user){
    const {cart} =user;
    const taxRate=1.3;
    const updatecart = cart.map(item =>  {
        return {
            name:item,
            price: item.price*taxRate
        }
    })
    return Object.assign({},user,{cart: updatecart})
}

function buyItem(user){
    return Object.assign({},user,{purchases: user.cart})
}

function emptycart(user){
    return Object.assign({},user,{cart: []})
}

