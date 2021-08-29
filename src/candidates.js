const candidates = function (content){

    let counselorsTitular = "";
    let counselorsAlternate = "";

    for (const counselor of content.counselors.titular){
        counselorsTitular += `
                <li class="list-group-item">
                    <span class="fw-bolder">${counselor.lastname}</span> ${counselor.name}
                </li>
        `
    }
    for (const counselor of content.counselors.alternate){
        counselorsAlternate += `
                <li class="list-group-item">
                    <span class="fw-bolder">${counselor.lastname}</span> ${counselor.name}
                </li>
        `
    }
    return`

    <div class="row mx-0 mb-3 mt-2 p-0 justify-content-center">
        <div class="col-11 col-lg-10 justify-content-center px-0">
            <div class="row row-cols-1 row-cols-md-2 g-md-5 my-0 justify-content-center">
              <div class="col-12 col-md-6 py-0 my-0 justify-content-center">
                  <div class="container-text px-0 py-3">
                    <div class="row px-3 pt-1 text-center"> 
                        <h3>${content.dean.short.attributes.title}</h3>
                    </div>
                    <div class="card px-3 border-0">
                      <img src="${content.dean.short.attributes.image}" class="card-img-top" alt=" Dean Image">
                      <div class="card-body border-0">
                        <h5 class="card-title">${content.dean.short.attributes.name}</h5>
                        <p class="card-text">${content.dean.short.body}</p>
                      </div>
                      <div class="card-footer align-self-end bg-white border-0">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#readMoreOne"> Leer más </a>
                      </div>
                    </div>
                  </div>
              </div>
              <div class="col-12 col-md-6 mt-2 mt-md-0 py-0 my-0  justify-content-center">
                  <div class="container-text px-0 py-3">
                    <div class="row px-3 pt-1 text-center"> 
                        <h3>${content.vicedean.short.attributes.title}</h3>
                    </div>
                    <div class="card px-3 border-0">
                      <img src="${content.vicedean.short.attributes.image}" class="card-img-top" alt="Vicedean Image">
                      <div class="card-body border-0">
                        <h5 class="card-title">${content.vicedean.short.attributes.name}</h5>
                        <p class="card-text">${content.vicedean.short.body}</p>
                      </div>
                      <div class="card-footer align-self-end bg-white border-0">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#readMoreTwo"> Leer más </a>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            
            <div class="modal fade" id="readMoreOne" tabindex="-1" aria-labelledby="readMoreOneLabel" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title" id="exampleModalLabel">${content.dean.large.attributes.title}</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="container-text">
                        <div class="card my-3 p-0 mx-0 border-0">
                            <div class="row g-0 ms-auto ms-md-5 p-0">
                              <div class="col-md-4">
                                <img src="${content.dean.large.attributes.image}" class="img-fluid rounded-start h-100" alt="Dean Image" style="transform: scale(0.8)">
                              </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                  <h4 class="card-title">${content.dean.large.attributes.name}</h4>
                                  <p class="card-text">${content.dean.large.body}</p>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal fade" id="readMoreTwo" tabindex="-1" aria-labelledby="readMoreTwoLabel" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title" id="exampleModalLabel">${content.vicedean.large.attributes.title}</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="container-text">
                        <div class="card my-3 mx-0 p-0 border-0 ">
                            <div class="row g-0 ms-auto ms-md-5 p-0">
                              <div class="col-md-4 ">
                                <img src="${content.vicedean.large.attributes.image}" class="img-fluid rounded-start h-100" alt="Vicedean Image" style="transform: scale(0.8)">
                              </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                  <h4 class="card-title">${content.vicedean.large.attributes.name}</h4>
                                  <p class="card-text">${content.vicedean.large.body}</p>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-1 mb-3 mx-1 mx-lg-0 justify-content-center" style="display: none">
                <div class="col-12 my-0 container-text justify-content-center">
                    <div class="row px-3 pt-2 pt-lg-3">
                        <h3 class="text-center" style="color: #1B57A6">   
                            Candidatxs a Consejerxs 
                        </h3> 
                    </div>
                    <div class="row m-3 justify-content-center">
                        <div class="col-12 col-lg-5 mt-2">
                            <div class="row text-center">
                                <h5>Titulares</h5>
                            </div>
                            <div class="row ">
                                <ul class="list-group list-group-flush text-center">
                                    ${counselorsTitular}
                                </ul>
                            </div>   
                        </div>
                        <div class="col-lg-1"></div>
                        <div class="col-12 col-lg-5 mt-4 mt-md-2">
                            <div class="row text-center">
                                <h5>Suplentes</h5>
                            </div>
                            <div class="row ">
                                <ul class="list-group list-group-flush text-center">
                                    ${counselorsAlternate}
                                </ul>
                            </div>     
                        </div>              
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    `
}

module.exports = candidates;


