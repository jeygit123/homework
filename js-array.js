const toysCart=[
    {
        item:'ps4 pro',stock:3,orginal: 399.99,onSale:false
    },
    {
        item:'Xbox One X',stock:2,orginal: 1999.99,discount:0.8,onSale:true
    },
    {
        item:'Nintendo Switch',stock:4,orginal: 299.99,onSale:false
    },
    {
        item:'ps2 console',stock:2,orginal: 1999.99,discount:0.8,onSale:true
    },
    {
        item:'Nindendo 64',stock:3,orginal: 999.99,discount:0.8,onSale:true
    }
    
];
// display items in cart
const itemsIncart=(cart)=>{
    cart.forEach (item=>{
        console.log(item)
    })
}
itemsIncart(toysCart)

//if true
display(toysCart)
function display(){
    const toysCartArray=[]
    for(i=0;i<toysCart.length;i++){
        var salePrice=0,total=0;
        if(toysCart[i].discount==0.8){
            var orginal=(toysCart[i].orginal-(toysCart[i].orginal*toysCart[i].discount));
            salePrice=orginal;
            
        }else{
            salePrice=toysCart[i].orginal;
        }
        total=salePrice*toysCart[i].stock;
        var item=toysCart[i].item
        var stock=toysCart[i].stock
        var original=toysCart[i].orginal
        var discount=toysCart[i].discount
        var salePrice=salePrice
        var total=total
        toysCartArray.push({item,stock,orginal,discount,salePrice,total})
    
    }
console.log(toysCartArray)
}


// const membersCartTotal =(cart) =>{{
//     let totalAmount=0
//     cart.forEach(item=>{
//         if(item.onSale === true){
//             let salePrice=item.price *0.80
//             totalAmount +=salePrice
//         }
//         else if(item.onSale ===false){
//             totalAmount +=item.price
//         }

//     })
//     console.log("Your total amount is:$"+totalAmount )
//     return totalAmount  
// }
// membersCartTotal(toysCart)
// }