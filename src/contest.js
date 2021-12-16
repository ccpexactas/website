const contest = function (content){

    function replaceIframe(iframe, width, height){
        return iframe
            .replace(/\<iframe/g, `<iframe style="float:right; padding-left:1rem; padding-right:1rem; padding-bottom:1rem"`)
            .replace(/(width=)"\d*"/g, `width=${width}`)
            .replace(/(height=)"\d*"/g, `height=${height}`)
    }

    let itemDiscussions = "";
    for (const discussion of content.discussion){
        discussion.media = replaceIframe(discussion.media, 356, 200)
        itemDiscussions += ` 
            <div class="row mx-0 mx-lg-5 my-3 px-0 py-2 container-text justify-content-center">
                <div class="col-11">
                    <h5 class="text-center mb-2">${discussion.title}</h5>
                    <div>
                        ${discussion.media}
                    </div>
                    <p>${discussion.description}</p>
                </div>
            </div>
        `
    }

    let itemsInstitutes = "";
    for (const item of content.institutes){
        item.table = "";
        for (const contact of item.contacts){
            if (typeof(contact.role) == "string"){
                contact.role = [contact.role]
            }
            if (contact.role){
                contact.roleList = `
                    <ul>
                        <li>${contact.role.join("</li><li>")}</li>    
                    </ul>
                `
            }

            if (typeof(contact.mail) == "string"){
                contact.mail = [contact.mail]
            }
            if (contact.mail){
                contact.mailList = `
                    <ul>
                        <li><a class="mailto">${contact.mail.join("</li><li>")}</a></li>    
                    </ul>
                `
            }

            if (typeof(contact.description) == "string"){
                contact.description = [contact.description]
            }
            if (contact.description){
                contact.descriptionList = `
                    <p>${contact.description.join("</p><p>")}</p>  
                    
                `
            }

            item.table += `
                <tr>
                  <th scope="row">${contact.name ? contact.name : ""}</th>
                  <td>${contact.position ? contact.position : ""}</td>
                  <td>${contact.mailList ? contact.mailList : ""}</td>
                  <td>${contact.roleList ? contact.roleList : ""}</td>
                </tr>
            `
        }
        itemsInstitutes += ` 
        
          <div class="accordion-item">
            <h2 class="accordion-header" id="heading${item.institute.replace(/ /g,'')}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${item.institute.replace(/ /g,'')}" aria-expanded="false" aria-controls="collapse${item.institute.replace(/ /g,'')}">
                ${item.institute}
              </button>
            </h2>
            <div id="collapse${item.institute.replace(/ /g,'')}" class="accordion-collapse collapse" aria-labelledby="heading${item.institute.replace(/ /g,'')}" data-bs-parent="#accordionInstitutes">
              <div class="accordion-body">
                <p> ${item.description ? item.description : ""} </p>
                
                <div class="table-responsive">
                  <table class="table">
                    <thead style="background: rgba(27, 87, 166, 0.1)">
                      <tr>
                        <th scope="col">Nombre y Apellido</th>
                        <th scope="col">Cargo</th>
                        <th scope="col">Contacto</th>
                        <th scope="col">Rol</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${item.table}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <script>
            window.onload = function(){
                Array.from(document.getElementsByClassName("mailto")).forEach(function(x){
                    x.href = "mailto:" + x.innerText;
                })
            }
          </script>
        `
    }

    return  `

    <div class="row mx-0 mx-lg-2 my-2 p-0 justify-content-center">
      <div class="col-11 col-lg-6 px-lg-3 mx-auto container-text">
        <p> ${content.introContest.body}</p>
      </div>
      
      <div class="col-11 col-lg-5 pt-2 px-lg-3 mx-auto container-text-right overflow-auto" style="height: 20rem">
        <p> ${content.updates.body}</p>
      </div>
    </div>
    
    <div class="row text-center">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfyE4aWu71V1cF0KyvI9eQmx6WerCQG-3L7qUzac9GMhaWeVA/viewform"> 
            Si querés recibir información a medida que se actualice ¡Suscribite!
        </a>
    </div>

    <div class="row mx-2 mx-lg-5 mt-2 mb-2 p-2 text-center" style="color: #1B57A6">
        <h5>Personas de contacto y convocatorias abiertas</h5>
    </div>
    <div class="row mx-2 mx-lg-5 mt-2 mb-2 p-2" style="color: #1B57A6">
        <p>Listado de profesorxs e investigadorxs que pueden actuar como 
        facilitadores para la inserción de doctores y doctoras en el sistema 
        científico-tecnológico nacional.</p>
    </div>

    <div class="accordion mx-2 mx-lg-5 mt-0 mb-5" id="accordionInstitutes" >
        ${itemsInstitutes}
    </div>

    
    <div class="row mx-2 mx-lg-5 mt-0 mb-2 px-2 py-0 text-center" style="color: #1B57A6">
        <h5>Videos sobre las actividades de los organismos de CyT</h5>
    </div>
    <div class="row mx-2 mx-lg-5 mt-2 mb-2 p-2" style="color: #1B57A6">
        <p>Aquí te ofrecemos los videos de los conversatorios que organizamos 
        desde CCP para conocer las actividades de los distintos organismos, sus 
        proyectos, misiones estratégicas y las áreas de interés para la 
        incorporación de doctores.</p>
    </div>

    <div>
        ${itemDiscussions}
    </div>
    
    
`;
}

module.exports = contest;
