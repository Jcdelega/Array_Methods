import products from './products.js'

const request =  document.getElementById('query')
const findByNameButton = document.getElementById('ok')
const containerProducts = document.querySelector('.products')
const findByPriceButton = document.querySelector('#price_button')
const priceInput = document.querySelector('#price')

const renderProducts = (arrayOfProducts) => {
    containerProducts.innerHTML = ''
    if(arrayOfProducts.length == 0 ){
        containerProducts.innerHTML = 'There is no results for the search given'
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
        console.log(query)
            const productFound = products.find(product =>
                product.name.toLowerCase() === query
            )|| []
            console.log(productFound)
            renderProducts([productFound])
    }else{
        console.log(`Please type something`)
        containerProducts.innerHTML = 'Please type something'
    }
})
findByPriceButton.addEventListener('click', ()=>{
    const valueRange = priceInput.value
    console.log(valueRange)
    const productsFilteredByPrice = products.filter(product =>
        product.price <= valueRange
    )
    console.log(productsFilteredByPrice)
    renderProducts(productsFilteredByPrice)
})
renderProducts(products)