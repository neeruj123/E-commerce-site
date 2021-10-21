const Product = require('./models/product');



const products = [
    {
        name:'Iphone',
        price: 100,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
        img: 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aXBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    },
    {
        name:'Latop',
        price: 1000,
        desc: "A laptop, laptop computer, or notebook computer is a small, portable personal computer (PC) with a screen and alphanumeric keyboard.",
        img: 'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    },
    {
        name:'Ipad',
        price: 400,
        desc: "iPad is a line of tablet computers designed, developed and marketed by Apple Inc., which run the iOS and iPadOS mobile operating systems",
        img: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBhZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    },
    {
        name:'Macbook Pro',
        price: 899,
        desc: "The MacBook is a brand of Macintosh notebook computers designed and marketed by Apple Inc. that use Apple's macOS operating system since 2006.",
        img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    },
    {
        name:'Drones',
        price: 999,
        desc: "Early drones — An unmanned aerial vehicle (UAV), commonly known as a drone, is an aircraft without any human pilot, crew or passengers on board",
        img: 'https://media.istockphoto.com/photos/drone-white-cloudy-dusk-sky-picture-id492683865?b=1&k=20&m=492683865&s=170667a&w=0&h=PtECbEZJ1Yxq0h_pGUzGZnGxnkPENqz5X8ZMcNiKst8='
    },
    {
        name:'Sports Shoes',
        price: 200,
        desc: "A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion.",
        img: 'https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI='
    },
    {
        name: 'Nike Shoes',
        price: 200,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
        img:'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Jeans',
        price: 499,
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by former Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold.",
        img:'https://images.unsplash.com/photo-1542272604-787c3835535d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amVhbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
]

const seedDB = async() => {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('DB Seeded');
}

module.exports=seedDB;