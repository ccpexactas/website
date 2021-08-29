const proposal = function (content) {
    return `

    <div class="row m-0 p-0 justify-content-center">
    
    ${content.attributes.title ? `
    <div class="row m-3 p-0 text-center" style="color: #1B57A6"> 
        <h1>${content.attributes.title}</h1> 
    </div>
    ` : ""}
    
    <div class="col-11 col-lg-10 mt-2 mt-lg-3 container-text justify-content-center">
        <div class="justify-content-center pt-2 px-2 px-lg-3 py-lg-3">
            ${content.body}
        </div>
        
        <div class="float-end pb-3 px-5">
            <a class="btn btn-primary" style="color: white" href="${content.attributes.viewMoreLink}"> Ver más</a>
        </div>
    </div>
    </div>
`
}
module.exports = proposal;
