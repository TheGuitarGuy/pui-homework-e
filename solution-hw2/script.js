
//This helps save time by putting all the data in one place and helps with reusability

const options = {
    glazing: [
        { id: 'keep-original', name: 'Keep original', priceChange: 0.00 },
        { id: 'sugar-milk', name: 'Sugar milk', priceChange: 0.00 },
        { id: 'vanilla-milk', name: 'Vanilla milk', priceChange: 0.50 },
        { id: 'double-chocolate', name: 'Double chocolate', priceChange: 1.50 }
    ],
    packSize: [
        { id: 1, size: 1, priceMultiple: 1 },
        { id: 3, size: 3, priceMultiple: 3 },
        { id: 6, size: 6, priceMultiple: 5 },
        { id: 12, size: 12, priceMultiple: 10 }
    ]
};

//This function is responsible for calculating the price of the product configuration
function calculatePrice(basePrice, glazingId, packSizeId) {
    let glazingPriceChange = 0;
    let packSizeMultiple = 1;

    for (let i = 0; i < options.glazing.length; i++) {
        if (options.glazing[i].id === glazingId) {
            glazingPriceChange = options.glazing[i].priceChange;
            break; 
        }
    }

    packSizeId = parseInt(packSizeId);

    for (let i = 0; i < options.packSize.length; i++) {
        if (options.packSize[i].id === packSizeId) {
            packSizeMultiple = options.packSize[i].priceMultiple;
            break; 
        }
    }

    const finalPrice = (basePrice + glazingPriceChange) * packSizeMultiple;

    return finalPrice.toFixed(2);
}


//This updates the price when new selections are made
function updatePrice(productId) {
    const productSelector = document.getElementById(productId);
    if (!productSelector) return;

    const selectedGlazingId = productSelector.querySelector('.glazing-option').value;

    // I used this to do this cool dynamic querySelector. https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
    const selectedPackSizeId = productSelector.querySelector(`input[name="pack-size-${productId.split('-')[1]}"]:checked`).value;

    const priceLabel = productSelector.querySelector('.price-label');

    const basePrice = parseFloat(priceLabel.getAttribute('basePrice'));

    const newPrice = calculatePrice(basePrice, selectedGlazingId, selectedPackSizeId);
    priceLabel.textContent = `$${newPrice}`;
}

//This populates the glazing options in the select inputs
function createGlazingOptions(selectElement) {
    options.glazing.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.id;
        optionElement.textContent = option.name;
        selectElement.appendChild(optionElement);
    });
}

//This adds products to an array
function addProductItems() {
    const glazingOptions = document.getElementsByClassName('glazing-option');
    Array.from(glazingOptions).forEach(glazingSelect => {
        createGlazingOptions(glazingSelect);

        glazingSelect.addEventListener('change', () => {
            const productElement = glazingSelect.closest('.product-selector');
            const productId = productElement.id;

            updatePrice(productId);
        });
    });

    const packSizeRadios = document.querySelectorAll('input[name^="pack-size-"]');
    packSizeRadios.forEach(radioButton => {
        radioButton.addEventListener('change', () => {

            const productElement = radioButton.closest('.product-selector');
            const productId = productElement.id;

            updatePrice(productId);
        });
    });

    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
}


let cart = [];

//This adds the cartItem to the cart array
function addToCart(event) {
    const productSelector = event.target.closest('.product-selector');
    if (!productSelector) return;

    const selectedGlazingId = productSelector.querySelector('.glazing-option').value;
    const selectedPackSizeId = productSelector.querySelector(`input[name="pack-size-${productSelector.id.split('-')[1]}"]:checked`).value;
    const priceLabel = productSelector.querySelector('.price-label');
    const basePrice = parseFloat(priceLabel.getAttribute('basePrice'));

    const finalPrice = calculatePrice(basePrice, selectedGlazingId, selectedPackSizeId);

    const cartItem = {
        glazing: selectedGlazingId,
        packSize: selectedPackSizeId,
        price: parseFloat(finalPrice)
    };

    // This is adding the item to the array
    cart.push(cartItem);
    updateCartUI();
}

//This function is resposible for changing the UI
function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartTotalPopupElement = document.getElementById('cart-total-popup');
    const cartPopup = document.getElementById('cart-popup');
    const cartCountElement = document.getElementById('cart-count');
    const cartTotalAmountElement = document.getElementById('cart-total-amount');

    let cartTotal = 0;
    cartItemsContainer.innerHTML = '';

    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        //Shout out to MDN docs on helping me 
        //with this problem and helping me remember how to use 
        //arrow functions with.find(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
        const glazingOption = options.glazing.find(option => option.id === item.glazing);
        const packSizeOption = options.packSize.find(option => option.id === parseInt(item.packSize));
    
        const listItem = document.createElement('li');
        listItem.innerHTML = `Glazing: ${glazingOption.name}<br>Pack Size: ${packSizeOption.size}<br>Price: $${item.price}`;

        cartItemsContainer.appendChild(listItem);
    
        cartTotal += item.price;
    }

    //This checks to ensure element exists so that we can fail gracefully
    if (cartTotalElement) {
        cartTotalElement.textContent = `$${cartTotal.toFixed(2)}`;
    }

    if (cartTotalPopupElement) {
        cartTotalPopupElement.textContent = `$${cartTotal.toFixed(2)}`;
    }

    if (cartCountElement) {
        cartCountElement.textContent = cart.length;
    }

    if (cartTotalAmountElement) {
        cartTotalAmountElement.textContent = `$${cartTotal.toFixed(2)}`;
    }

    if (cartPopup) {
        cartPopup.style.display = 'block';
        setTimeout(() => {
            cartPopup.style.display = 'none'; 
        }, 3000);
    }
}


// I got this idea from here https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
document.addEventListener('DOMContentLoaded', () => {
    addProductItems();

    document.querySelectorAll('.product-selector').forEach(productSelector => {
        updatePrice(productSelector.id);
    });
});
