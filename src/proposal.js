const proposal = function (content) {
    
    let listLinksDocuments="";
    for (const link of content.linksDocuments){
        listLinksDocuments += `
                <li class="list-group-item"> 
                    ${link.title} ${link.link} 
                </li>
        `
    }
    
    return `

    <div class="row m-0 p-0 justify-content-center">
    
    ${content.proposal.attributes.title ? `
    <div class="row m-3 p-0 text-center" style="color: #1B57A6"> 
        <h1>${content.proposal.attributes.title}</h1> 
    </div>
    ` : ""}
    
    <div class="col-11 col-lg-10 mt-2 mt-lg-3 container-text justify-content-center">
        <div class="justify-content-center pt-2 px-2 px-lg-3 py-lg-3">
            ${content.proposal.body}
        </div>
        
        <div class="float-end pb-3 px-5">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#viewMoreLinks">
              Ver más
            </button>
            <div class="modal fade" id="viewMoreLinks" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="viewMoreLinksLabel" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Documentos disponibles</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <ul class="list-group">
                        ${listLinksDocuments}
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
module.exports = proposal;
