document.addEventListener('DOMContentLoaded',function(){
   const products=[
    {id:1,name:'laptop',price:100000},
    {id:2,name:'mobile phone',price:10000},
    {id:3,name:'earphones',price:800},
    {id:4,name:'speaker',price:200},
    {id:5,name:'charger',price:10},
   ]
    
    const cart=[]
    const productList=document.getElementById('product-list')
    const cartItems=document.getElementById('cart-items')
    const emptyCartMessage=document.getElementById('empty-cart')
    const cartTotalMessage=document.getElementById('cart-total')
    const totalPrice=document.getElementById('total-price')
    const checkOutBtn=document.getElementById('checkout-btn')


    products.forEach(product=>{
        const productDiv=document.createElement('div')
        productDiv.classList.add('product')
        productDiv.innerHTML=`
        <span>${product.name} $${product.price.toFixed(2)}</span>
        <button data-id="${product.id}">Add to cart</button>`
        productList.appendChild(productDiv)
    })

    productList.addEventListener('click',(e)=>{
        if(e.target.tagName === 'BUTTON'){
           const productId=parseInt( e.target.getAttribute('data-id'))
          const product= products.find(p=>p.id=== productId)
          addtoCart(product)
        }
    })
    function addtoCart(product){
        cart.push(product)
        rendercart()
    }
    function rendercart(){
        cartItems.innerText=""
        let totalprice=0
        if(cart.length){
            emptyCartMessage.classList.add('hidden')
            cartTotalMessage.classList.remove("hidden")
           cart.forEach((item,index)=>{
            totalprice+=item.price;
            const cartItem=document.createElement('div')
            cartItem.innerHTML=`${item.name}-$${item.price.toFixed(2)}`
            cartItems.appendChild(cartItem)
            totalPrice.textContent=`$${totalprice.toFixed(2)}`
           })
        }
        else{
            emptyCartMessage.classList.remove("hidden")
            cartTotalMessage.classList.add("hidden")
        }
    }
    checkOutBtn.addEventListener('click',()=>{
        cart.length=0;
         alert("Checkout Successful!")
        rendercart()
    })
})  