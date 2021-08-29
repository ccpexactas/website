const join = content => `

    <div class="row mx-0 my-2 p-0 justify-content-center">
        
        <div class="row m-0 p-0 justify-content-center">
            <div class="col-12 col-lg-10 p-0 container-text overflow-hidden" >
                <div class="row m-0 p-0 justify-content-center">
                    <div class="col-6 col-lg-2 m-0 p-0">
                        <div class="icon-bar-contact p-0">
                          <a href="${content.invitation.attributes.twitter}" class="twitter"><i class="fa fa-twitter"></i></a>
                          <a href="${content.invitation.attributes.facebook}" class="facebook"><i class="fa fa-facebook"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-8 m-0 p-0 dn text-center align-items-center">
                        <h5 class="my-2"> ${content.invitation.attributes.title} </h5>
                    </div>  
                    <div class="col-6 col-lg-2 m-0 p-0">
                        <div class="icon-bar-contact p-0">
                          <a href="${content.invitation.attributes.instagram}" class="instagram"><i class="fa fa-instagram"></i></a>
                          <a href="${content.invitation.attributes.youtube}" class="youtube"><i class="fa fa-youtube"></i></a>
                        </div>
                    </div>
                </div>         
                <div class="row mt-2 mt-lg-3 mt-lg-1 px-2" >
                    ${content.invitation.body}
                </div>
            </div>
        </div>
        
        
        
        <div class="row mt-3 mb-1 p-0 text-center" style="color: #1B57A6">
            <h3>Lista de adherentes</h3> 
        </div>
        <div class="col-12 col-lg-10 p-2 my-0 justify-content-center container-text">
            <table class="table w-100">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Dependencia del cargo</th>
                </tr>
              </thead>
              <tbody id="joinTable">
              </tbody>
            </table>
        </div>
    </div>
    <script src="static/tableLoader.js"></script>
    <script>
        window.onload = function(){
            updateTable(
                document.getElementById("joinTable"), 
                "${content.invitation.attributes.csv}"
            )
        }
    </script>
`;

module.exports = join;