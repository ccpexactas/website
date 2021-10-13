const home = (content)=>`

    <div class="row mx-auto mt-0 mb-2 mb-lg-3 p-0 container-banner">
        <a href="https://ccpexactas.github.io/website/">
            <img class="p-0" src="${content.attributes.banner}" alt="Construcción Colectiva Profesorxs Exactas (CCPExactas)">
        </a>
    </div>

    ${content.attributes.title ? `
    <div class="row mx-5 mt-5 mb-3 p-0 text-center">
        <h1 style="color: #1B57A6">${content.attributes.title}</h1>
    </div>
    ` : ""}
    
    <div class="row m-0 p-0 justify-content-center">
        <div class="col-11 col-lg-10 m-0 px-2 px-lg-3 pt-2 pb-0 container-text">

            ${content.body}
    
        </div>
    </div>

    <div class="row mx-0 p-0 justify-content-center">
        <div class="col-11 col-lg-5 my-3 justify-content-center">
            <div id="twitter-div" class="row m-0 p-0 justify-content-center">
                <a class="twitter-timeline" data-width="500" data-height="600" data-theme="light" href="https://twitter.com/CCP_Exactas?ref_src=twsrc%5Etfw">Tweets by CCP_Exactas</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
        </div>
        <div class="col-11 col-lg-5 my-3 justify-content-center">
            <div class="row m-auto p-0 justify-content-center">
                <iframe id="facebook-iframe" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCCPExactas%2F%3Fref%3Dpy_c&tabs=timeline&width=500&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500" height="600" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" data-adapt-container-width="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
        </div>
    </div>
<!--    <script>-->
<!--        window.onresize = function(){-->
<!--            let twitter = document.getElementById("twitter-div");-->
<!--            let facebook = document.getElementById("facebook-iframe");-->
<!--            facebook.src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCCPExactas%2F%3Fref%3Dpy_c&tabs=timeline&width=" +-->
<!--            twitter.offsetWidth + "&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId";-->
<!--            facebook.style.width = String(twitter.offsetWidth) + "px";-->
<!--        }-->
<!--    </script>-->
`;

module.exports = home;
