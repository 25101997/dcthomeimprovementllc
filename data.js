items = 
[
    {
        Id: 'carousel_product_1',
        title: 'Deck Upgrade To Composite',
        description: '',
        imgs: ['images/items/Deck Upgrade To Composite 1.jpeg', 'images/items/Deck Upgrade To Composite 2.jpeg']
    },
    {
        Id: 'carousel_product_2',
        title: 'Basement Remodel',
        description: '',
        imgs: ['images/items/Basement Remodel 1.jpeg', 'images/items/Basement Remodel 2.jpeg']
    },
    {
        Id: 'carousel_product_3',
        title: 'Ceiling Remodel And Paint',
        description: '',
        imgs: ['images/items/Ceiling Remodel And Paint 1.jpeg', 'images/items/Ceiling Remodel And Paint 2.jpeg']
    },
    {
        Id: 'carousel_product_4',
        title: 'Drywall',
        description: '',
        imgs: ['images/items/Drywall 1.jpeg', 'images/items/Drywall 2.jpeg', 'images/items/Drywall 3.jpeg', 'images/items/Drywall 4.jpeg', 'images/items/Drywall 5.jpeg']
    },
    {
        Id: 'carousel_product_5',
        title: 'Bathroom Repair And Paint',
        description: '',
        imgs: ['images/items/Bathroom Repair And Paint 1.jpeg', 'images/items/Bathroom Repair And Paint 2.jpeg', 'images/items/Bathroom Repair And Paint 3.jpeg']
    },
    {
        Id: 'carousel_product_6',
        title: 'Carpet Removal and Install',
        description: '',
        imgs: ['images/items/Carpet Removal and Install 1.jpeg']
    },
    {
        Id: 'carousel_product_7',
        title: 'Interior and Exterior Railing',
        description: '',
        imgs: ['images/items/Interior and Exterior Railing.jpeg', 'images/items/Interior and Exterior Railing 1.jpeg']
    }
]


numId = 0;

for(item of items){
    numId = numId + 1;
    cardHead = `
<div class="col-md-6">
    <figure class="card box-shadow bg-dark-green">
        <div id="${item.Id}" class="carousel slide" data-bs-ride="carousel">
            
            <div class="m-2 close-full-img" style="display:none;">
                <button type="button" class="btn-close btn-green"></button>
            </div>
            
            <div class="carousel-inner bg-light-gray">`

    cardImages = ``;
    count = 0;
    for(img of item.imgs){
        count = count + 1;
        if(count == 1){active = 'active'}else{active=''}
        cardImg =`
                <div class="carousel-item ${active}">
                    <div class="img-service-container">
                        <img src="${img}" class="d-block img-service">
                    </div>
                </div>`
        cardImages = cardImages + cardImg
    }
    
    cardFoot = `                  
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#${item.Id}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#${item.Id}" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <div class="card-body">
            <h5 class="text-white">${item.title}</h5>
            <p class="card-text"></p>
            
            <div style="display: flex; justify-content: space-between;">
                <button class="btn btn-green btn-get-quote" type="button" data-id="${numId}" data-title="${item.title}">
                    Get Quote
                </button>

                <button class="btn btn-green" type="button" style="border-radius: 5px;" onclick="expand_img('${item.Id}')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"></path>
                    </svg>
                </button>
            </div>
        </div>
    </figure>
</div>`

    document.write(cardHead + cardImages + cardFoot)
}