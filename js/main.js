// Efeito suave do scroll
$('#navbar a, .btn').on('click', function (event){
    if(this.hash =/= "") {
        event.preventDefault()

        const hash = this.hash

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top = 100
            },
            300
        )
    }
})

window.addEventListener('scroll', function(){
    if(window.scrolly > 150){
        document.querySelector("#navbar").style.opacity = 0.9
    }else{
        document.querySelector('#navbar').style.opacity = 1
    }
})