let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let favCarts = [];
openShopping.addEventListener('click',()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click',()=>{
    body.classList.remove('active');
})
let products = [
    {
        id : 1,
        name : 'PRODUCT NAME 1',
        image : '1.jpg',
        price : 13000
    },
    {
        id : 2,
        name : 'PRODUCT NAME 2',
        image : 'f1.jpg',
        price : 12000
    },
    {
        id : 3,
        name : 'PRODUCT NAME 3',
        image : 'p26.jpg',
        price : 12000
    },
    {
        id : 4,
        name : 'PRODUCT NAME 4',
        image : 'p26.jpg',
        price : 12000
    },
    {
        id : 5,
        name : 'PRODUCT NAME 5',
        image : 'p26.jpg',
        price : 12000
    },
    {
        id : 6,
        name : 'PRODUCT NAME 6',
        image : 'p26.jpg',
        price : 12000
    },
    {
        id : 7,
        name : 'PRODUCT NAME 7',
        image : 'p26.jpg',
        price : 12000
    },    
    {
        id : 8,
        name : 'PRODUCT NAME 8',
        image : 'p26.jpg',
        price : 12000
    },
    {
        id : 9,
        name : 'PRODUCT NAME 9',
        image : 'p27.jpg',
        price : 12000
    },
    {
        id : 10,
        name : 'PRODUCT NAME 10',
        image : 'p27.jpg',
        price : 12000
    },
    {
        id : 11,
        name : 'PRODUCT NAME 11',
        image : 'p27.jpg',
        price : 12000
    },
    {
        id : 12,
        name : 'PRODUCT NAME 12',
        image : 'p27.jpg',
        price : 12000
    },
    {
        id : 13,
        name : 'PRODUCT NAME 13',
        image : 'p27.jpg',
        price : 12000
    },
    {
        id : 14,
        name : 'PRODUCT NAME 14',
        image : 'p28.jpg',
        price : 12000
    },
    /*{
        id : 15,
        name : 'PRODUCT NAME 15',
        image : ,
        price : 
    }, 
    {
        id : 16,
        name : 'PRODUCT NAME 16',
        image : ,
        price : 
    },
    {
        id : 17,
        name : 'PRODUCT NAME 17',
        image : ,
        price : 
    },
    {
        id : 18,
        name : 'PRODUCT NAME 18',
        image : ,
        price : 
    },
    {
        id : 19,
        name : 'PRODUCT NAME 19',
        image : ,
        price : 
    }, 
    {
        id : 20,
        name : 'PRODUCT NAME 20',
        image : ,
        price : 
    },
    {
        id : 21,
        name : 'PRODUCT NAME 21',
        image : ,
        price : 
    },
    {
        id : 22,
        name : 'PRODUCT NAME 22',
        image : ,
        price : 
    },
    {
        id : 23,
        name : 'PRODUCT NAME 23',
        image : ,
        price : 
    },
    {
        id : 24,
        name : 'PRODUCT NAME 24',
        image : ,
        price : 
    },
    {
        id : 25,
        name : 'PRODUCT NAME 25',
        image : ,
        price : 
    },
    {
        id : 26,
        name : 'PRODUCT NAME 26',
        image : ,
        price : 
    },
    {
        id : 27,
        name : 'PRODUCT NAME 27',
        image : ,
        price : 
    },
    {
        id : 28,
        name : 'PRODUCT NAME 28',
        image : ,
        price : 
    },{
        id : 29,
        name : 'PRODUCT NAME 29',
        image : ,
        price : 
    },
    {
        id : 30,
        name : 'PRODUCT NAME 30',
        image : ,
        price : 
    },    
    {
        id : 31,
        name : 'PRODUCT NAME 31',
        image : ,
        price : 
    },
    {
        id : 32,
        name : 'PRODUCT NAME 32',
        image : ,
        price : 
    },
    {
        id : 33,
        name : 'PRODUCT NAME 33',
        image : ,
        price : 
    },
    {
        id : 34,
        name : 'PRODUCT NAME 34',
        image : ,
        price : 
    },
    {
        id : 35,
        name : 'PRODUCT NAME 35',
        image : ,
        price : 
    },
    {
        id : 36,
        name : 'PRODUCT NAME 36',
        image : ,
        price : 
    }, 
    {
        id : 37,
        name : 'PRODUCT NAME 37',
        image : ,
        price : 
    },
    {
        id : 38,
        name : 'PRODUCT NAME 38',
        image : ,
        price : 
    },
    {
        id : 39,
        name : 'PRODUCT NAME 39',
        image : ,
        price : 
    },
    {
        id : 40,
        name : 'PRODUCT NAME 40',
        image : ,
        price : 
    }, 
    {
        id : 41,
        name : 'PRODUCT NAME 41',
        image : ,
        price : 
    },   
    {
        id : 42,
        name : 'PRODUCT NAME 42',
        image : ,
        price : 
    },   
    {
        id : 43,
        name : 'PRODUCT NAME 43',
        image : ,
        price : 
    },   
    {
        id : 44,
        name : 'PRODUCT NAME 44',
        image : ,
        price : 
    },   
    {
        id : 45,
        name : 'PRODUCT NAME 45',
        image : ,
        price : 
    },   
    {
        id : 46,
        name : 'PRODUCT NAME 46',
        image : ,
        price : 
    },   
    {
        id : 47,
        name : 'PRODUCT NAME 47',
        image : ,
        price : 
    },   
    {
        id : 48,
        name : 'PRODUCT NAME 48',
        image : ,
        price : 
    },   
    {
        id : 49,
        name : 'PRODUCT NAME 49',
        image : ,
        price : 
    },   
    {
        id : 50,
        name : 'PRODUCT NAME 50',
        image : ,
        price : 
    }, 
    {
        id : 51,
        name : 'PRODUCT NAME 51',
        image : ,
        price : 
    },     
    {
        id : 52,
        name : 'PRODUCT NAME 52',
        image : ,
        price : 
    },     
    {
        id : 53,
        name : 'PRODUCT NAME 53',
        image : ,
        price : 
    },     
    {
        id : 54,
        name : 'PRODUCT NAME 54',
        image : ,
        price : 
    },     
    {
        id : 55,
        name : 'PRODUCT NAME 55',
        image : ,
        price : 
    },     
    {
        id : 56,
        name : 'PRODUCT NAME 56',
        image : ,
        price : 
    },     
    {
        id : 57,
        name : 'PRODUCT NAME 57',
        image : ,
        price : 
    },     
    {
        id : 58,
        name : 'PRODUCT NAME 58',
        image : ,
        price : 
    },     
    {
        id : 59,
        name : 'PRODUCT NAME 59',
        image : ,
        price : 
    },     
    {
        id : 60,
        name : 'PRODUCT NAME 60',
        image : ,
        price : 
    }, 
    {
        id : 61,
        name : 'PRODUCT NAME 61',
        image : ,
        price : 
    },         
    {
        id : 62,
        name : 'PRODUCT NAME 62',
        image : ,
        price : 
    },         
    {
        id : 63,
        name : 'PRODUCT NAME 63',
        image : ,
        price : 
    },         
    {
        id : 64,
        name : 'PRODUCT NAME 64',
        image : ,
        price : 
    },         
    {
        id : 65,
        name : 'PRODUCT NAME 65',
        image : ,
        price : 
    },         
    {
        id : 66,
        name : 'PRODUCT NAME 66',
        image : ,
        price : 
    },         
    {
        id : 67,
        name : 'PRODUCT NAME 67',
        image : ,
        price : 
    },         
    {
        id : 68,
        name : 'PRODUCT NAME 68',
        image : ,
        price : 
    },         
    {
        id : 69,
        name : 'PRODUCT NAME 69',
        image : ,
        price : 
    },         
    {
        id : 70,
        name : 'PRODUCT NAME 70',
        image : ,
        price : 
    }, 
    {
        id : 71,
        name : 'PRODUCT NAME 71',
        image : ,
        price : 
    },        
    {
        id : 72,
        name : 'PRODUCT NAME 72',
        image : 
        price : 
    },        
    {
        id : 73,
        name : 'PRODUCT NAME 73',
        image : 
        price 
    },        
    {
        id : 74,
        name : 'PRODUCT NAME 74',
        image : 
        price : 
    },        
    {
        id : 75,
        name : 'PRODUCT NAME 75',
        image : ,
        price : 
    },        
    {
        id : 76,
        name : 'PRODUCT NAME 76',
        image : ,
        price : 
    },        
    {
        id : 77,
        name : 'PRODUCT NAME 77',
        image : ,
        price : 
    },        
    {
        id : 78,
        name : 'PRODUCT NAME 78',
        image : ,
        price : 
    },        
    {
        id : 79,
        name : 'PRODUCT NAME 79',
        image : ,
        price : 
    },        
    {
        id : 80,
        name : 'PRODUCT NAME 80',
        image : ,
        price : 
    },
    {
        id : 81,
        name : 'PRODUCT NAME 81',
        image : ,
        price : 
    },    
    {
        id : 82,
        name : 'PRODUCT NAME 82',
        image : ,
        price : 
    },    
    {
        id : 83,
        name : 'PRODUCT NAME 83',
        image : ,
        price : 
    },    
    {
        id : 84,
        name : 'PRODUCT NAME 84',
        image : ,
        price : 
    },    
    {
        id : 85,
        name : 'PRODUCT NAME 85',
        image : ,
        price : 
    },    
    {
        id : 86,
        name : 'PRODUCT NAME 86',
        image : ,
        price : 
    },    
    {
        id : 87,
        name : 'PRODUCT NAME 87',
        image : ,
        price : 
    },    
    {
        id : 88,
        name : 'PRODUCT NAME 88',
        image : ,
        price : 
    },    
    {
        id : 89,
        name : 'PRODUCT NAME 89',
        image : ,
        price : 
    },    
    {
        id : 90,
        name : 'PRODUCT NAME 90',
        image : ,
        price : 
    }, 
    {
        id : 91,
        name : 'PRODUCT NAME 91',
        image : ,
        price : 
    },        
    {
        id : 92,
        name : 'PRODUCT NAME 92',
        image : ,
        price : 
    },        
    {
        id : 93,
        name : 'PRODUCT NAME 93',
        image : ,
        price : 
    },        
    {
        id : 94,
        name : 'PRODUCT NAME 94',
        image : ,
        price : 
    },        
    {
        id : 95,
        name : 'PRODUCT NAME 95',
        image : ,
        price : 
    },        
    {
        id : 96,
        name : 'PRODUCT NAME 96',
        image : ,
        price : 
    },        
    {
        id : 97,
        name : 'PRODUCT NAME 97',
        image : ,
        price : 
    },        
    {
        id : 98,
        name : 'PRODUCT NAME 98',
        image : ,
        price : 
    },        
    {
        id : 99,
        name : 'PRODUCT NAME 99',
        image : ,
        price : 
    },        
    {
        id : 100,
        name : 'PRODUCT NAME 100',
        image : ,
        price : 
    }, */                                  
];

let listCards = [];
function initApp(){
    products.forEach((value,key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="img/products/${value.image}"/>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>
        `;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    const isHasCardInList = favCarts.filter((row) => row.id == products[key].id);
    if(products[key] && isHasCardInList.length == 0 )
    {
        favCarts.push(products[key])
        quantity.innerHTML = parseInt(quantity.innerHTML) +  parseInt(1);
        const quantityValue = parseInt(quantity.innerHTML);
        let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="img/products/${products[key].image}"/></div>
            <div>${products[key],name}</div>
            <div>${products[key].price.toLocaleString()}</div>
            <div>
            <button onclick="changeQuantity(${key},${quantityValue - 1})">-</button>
            <div class="count">${quantityValue}</div>
            <button onclick="changeQuantity(${key},${quantityValue + 1})">+</button>
            </div>
        `;
        listCard.appendChild(newDiv);
        
    }
    // reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCard.forEach((value,key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div>
                <img src="image/${value.image}"/></div>
            <div>${value,name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>
            <button onclick="changeQuantity(${key},${value.quantity - 1})">-</button>
            <div class="count">${value.quantity}</div>
            <button onclick="changeQuantity(${key},${value.quantity + 1})">+</button>
            </div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCard[key];
    }else{
        listCard[key].quantity = quantity;
        listCard[key].price = quantity * products[key].price;
    }
    reloadCard();
}
