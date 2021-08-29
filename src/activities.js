const activities = function (content){

    let itemsCarousel = "";
    for (const item of content.carousel){
        itemsCarousel += `
            <div class="carousel-item ${item === content.carousel[0] ? "active" : ""}">
              <img src="${item}" class="d-block w-100" alt="...">
            </div>
        `
    }

    let oldActivities ="";
    for(let activity of content.activities){
        oldActivities += `
        <div class="row mx-0 my-3 p-0 container-text justify-content-center">
            <div class="col-12 col-lg-7">
                <div class="row m-0 px-0 py-3">
                    ${activity.media}
                </div>
            </div>
            <div class="col-12 col-lg-5">
                <div class="row mx-0 mb-0 mt-1 p-3 text-center">
                    <h5>${activity.title}</h5>
                </div>
                <div class="row m-0 p-3">
                    <p>${activity.description}</p>
                </div>

            </div>
        </div>
            `
    }

    return  `

    <div class="row mx-0 my-3 p-0 justify-content-center">
    
<!--        <div class="col-11 col-lg-10 justify-content-center">-->
<!--            <h1 class="text-center" style="color: #1B57A6">   -->
<!--                Actividades -->
<!--            </h1>-->
<!--        </div>-->
        <div class="row mx-0 mt-0 mt-lg-3 mb-1 p-0 text-center" style="color: #1B57A6">
            <h4 class="m-1 p-2"> Próximas actividades</h4>
        </div>
        <div class="row m-0 p-0">
            <div id="carouselIndicators" class="carousel carousel-dark slide" data-bs-ride="carousel">
              
              <div class="carousel-inner container-carousel m-auto">
             
                 ${itemsCarousel}
        
              </div>
              
              <button class="carousel-control-prev justify-content-end" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon carousel-dark" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              
              <button class="carousel-control-next justify-content-start" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon carousel-dark" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
        </div>
    </div>
    
    <div class="row mx-0 mt-3 mt-lg-4 mb-0 p-0 text-center" style="color: #1B57A6">
        <h4 class="m-1 p-0"> Actividades pasadas</h4>
    </div>

    <div class="row m-0 p-0 justify-content-center">
        <div class="col-11 col-lg-10 justify-content-center">
    
        ${oldActivities}
    
        </div>
    </div> 
    
`;
}

module.exports = activities;