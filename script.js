let mainWrapperElm = document.getElementById('main-wrapper')
let productList = []

fetch('https://dummyjson.com/products?limit=20')
.then(res => res.json())
.then(res => {
    productList = res
    console.log(res)
    showProducts()
});

const showProducts = () => {
    let productsElm = document.createElement('div')
    productsElm.setAttribute('id','products')
    productsElm.classList.add('grid','grid-cols-1','md:grid-cols-2','lg:grid-cols-3','gap-4', 'm-2')


    productList.products.forEach(element => {
        let product = document.createElement('div')
        product.classList.add('p-4', 'relative','border-[2px]','border-red-800', 'rounded-md','w-full')
        let titlePar = document.createElement('p')
        titlePar.classList.add('text-base', 'md:text-lg')
        titlePar.innerText = element.title
        let brandPar = document.createElement('span')
        brandPar.classList.add('text-xs', 'md:text-sm','absolute','top-0','right-1')
        brandPar.innerText = element.brand

        let categorySpan = document.createElement('span')
        categorySpan.innerHTML = element.category
        categorySpan.classList.add('text-xs', 'md:text-sm','absolute', 'top-4', 'right-1')

        let imageElm = document.createElement('img')
        imageElm.classList.add('h-40', 'mx-auto')
        imageElm.setAttribute('src', element.images[0])

        let detailsInfo = document.createElement('div')
        detailsInfo.classList.add('flex','justify-between', 'items-center','text-base')
        let priceSpan = document.createElement('span')
        priceSpan.innerText = 'Price: ' + element.price + ' tl'
        let ratingSpan = document.createElement('span')
        ratingSpan.innerHTML =  '<img src="./star.svg" alt="" class="w-6 inline pb-2">' +  element.rating
        let stockSpan = document.createElement('span')
        stockSpan.innerText = 'Stock: ' + element.stock
        detailsInfo.append(priceSpan,ratingSpan, stockSpan)


        product.appendChild(brandPar)
        product.appendChild(categorySpan)
        product.appendChild(titlePar)
        product.appendChild(imageElm)
        product.appendChild(detailsInfo)
        productsElm.appendChild(product)
    });
   

    mainWrapperElm.appendChild(productsElm)

    let products = document.getElementById('products')
    console.log( products)
}