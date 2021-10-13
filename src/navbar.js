const navbar = function (elements){
    let nav = `
    <nav class="navbar navbar-expand-lg navbar-light" style="background: #1B57A6">
      <div class="container-fluid">
        <a class="navbar-brand" href="https://ccpexactas.github.io/website/">
          <img src="static/img/CCPLogo.png" alt="CCPExactas" width="30">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    `;
    for (const element of elements) {
        nav += `
            <li class="nav-item">
              <a class="nav-link ${element.active ? "active" : ""}" aria-current="page" href="${element.href}" style="color: #f9fafb">${element.title}</a>
            </li>
        `
    }
    nav += ` 
          </ul>
        </div>
      </div>
    </nav>`
    return nav
}

module.exports = navbar;
