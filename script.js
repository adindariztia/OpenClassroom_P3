function Home(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
}

function Scroll(id){
let idElement = '#' + id;
console.log(idElement);
    $("body,html").animate({
        scrollTop: $(idElement).offset().top - 30
    }, 800);
};

function redirect(id){
    let idElement = '#' + id;
    console.log(idElement)
    window.location.href = "http://localhost:8887/news.html" + idElement;
}