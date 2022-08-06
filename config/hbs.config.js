const hbs = require("hbs")
const { options } = require("./routes.config")

hbs.registerPartials(__dirname + "/../views/partials")

hbs.registerHelper('totalPrice', function (products) {
    return products?.reduce((acumulador, product) => acumulador + product.productId.price, 0)
})

hbs.registerHelper('totalPriceRecord', function (products) {
    return products?.reduce((acumulador, product) => acumulador + product.productId.price, 0)
})

hbs.registerHelper('count', function (products) {
    return products?.length
})

hbs.registerHelper('prural', function (products) {
    if (products?.length <= 1) {
        return ""
    } else {
        return "s"
    }
})

hbs.registerHelper('totalPriceCost', function (products) {
    return products?.reduce((acumulador, product) => acumulador + product.productId.price, 20)
})

hbs.registerHelper('isSelected', function (product, category, options) {
    if (product.category[0] === category) {
        return options.fn(this)
    } else {
        return options.inverse(this)
    }
})

hbs.registerHelper('recordFilter', function (user, status, currentUser, options) {
    if (user === currentUser && status === 'completed') {
       return options.fn(this)
    } else {
        return options.inverse(this)
    }
})

hbs.registerHelper('createHour', function (hour) {
    return output = String(hour.getDate()).padStart(2, '0') + '/' + String(hour.getMonth() + 1).padStart(2, '0') + '/' + hour.getFullYear();
})

hbs.registerHelper('indexProfile', function (user, currentUser, options) {
    if (user != currentUser) {
       return options.fn(this)
    } else {
        return options.inverse(this)
    }
})







