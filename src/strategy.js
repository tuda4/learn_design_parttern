// bài toán về order khi có mã giảm giá và cách viết.
/**
 * 
 * @param {Number} originalPrice 
 * @returns {Number} price
 */
const originalPriceProduct = (originalPrice) => {
    return originalPrice
}

const saleNormalPrice = (originalPrice) => {
    return originalPrice < 200 ? originalPrice*0.9 : originalPrice - 25
}

const flashSalePrice = (originalPrice) => {
    return originalPrice*0.8
}

const blackFridayPrice = (originalPrice) => {
    return originalPrice*0.6
}

const getPriceOfSale = {
    original : originalPriceProduct,
    saleNormal: saleNormalPrice,
    flashSale: flashSalePrice,
    blackFriday: blackFridayPrice
}

const getPriceProduct = (typeSale, originalPrice) => {
    return getPriceOfSale[typeSale](originalPrice)
}



console.log(getPriceProduct("flashSale", 400))