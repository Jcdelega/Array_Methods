import products from './products.js'

const request =  document.getElementById('query')
const findByNameButton = document.getElementById('ok')
const containerProducts = document.querySelector('.products')
const findByPriceButton = document.querySelector('#price_button')
const priceInput = document.querySelector('#price')
const sortButton = document.querySelector('#sort_button')
let productsFiltered = []

const renderProducts = (arrayOfProducts) => {
    containerProducts.innerHTML = ''
    if(arrayOfProducts.length == 0 || arrayOfProducts.includes(undefined)){
        containerProducts.innerHTML = 'There is no results for the given search'
    }else{
        arrayOfProducts.forEach(product => {
            const li = document.createElement('li')
            li.innerHTML =`
            <div>
                <h3>${product.name}</h3>
                <p>Category: ${product.category}</p>
                <div>
                    <p>Price: ${product.price} $</p>
                    <p>Rate: ${product.rate} </p>
                </div>
            </div>
            `
            containerProducts.appendChild(li)
        })
    }
}
//request.addEventListener()
findByNameButton.addEventListener('click',()=>{
    if(request.value){
        const query = request.value.toLowerCase()
            productsFiltered.push(products.find(product =>
                product.name.toLowerCase() === query
            ))
            console.log(productsFiltered)
            renderProducts(productsFiltered)
    }else{
        console.log(`Please type something`)
        containerProducts.innerHTML = 'Please type something'
    }
})
findByPriceButton.addEventListener('click', ()=>{
    const valueRange = priceInput.value
    productsFiltered = products.filter(product =>
        product.price <= valueRange
    )
    renderProducts(productsFiltered)
})
sortButton.addEventListener('click', ()=>{
    if(productsFiltered.length == 0){
        products.sort((productA, productB)=>productA.name.localeCompare(productB.name))
        renderProducts(products)  
    }else{
        productsFiltered.sort((productA, productB)=>productA.name.localeCompare(productB.name))
        renderProducts(productsFiltered)
    }
})
renderProducts(products)
