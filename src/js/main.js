import products from './products.js'

const request =  document.getElementById('query')
const btn = document.getElementById('ok')
const containerProducts = document.querySelector('.products')

const renderProducts = (arrayOfProducts) => {
    containerProducts.innerHTML = ''
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
    });
}
//request.addEventListener()
btn.addEventListener('click',()=>{
    if(request.value){
        const query = request.value.toLowerCase()
        console.log(query)
            let productsFiltered = products.filter(product =>{
                console.log(product.name.toLowerCase())
                product.name.toLocaleLowerCase() == query || product.category.toLowerCase == query
            })
            console.log(productsFiltered)
            renderProducts(productsFiltered)
        }else{
            console.log(`Please type something`)
        }
})
renderProducts(products)