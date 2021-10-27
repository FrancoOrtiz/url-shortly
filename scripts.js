const $menu = document.getElementById("menu");
const $menuButton = document.getElementById("menu-button");
const $form = document.getElementById('form');
const $input = document.getElementById('input');
const $button = document.getElementById('button');

const $copy = document.getElementById('copy');
const $shorturl__contain = document.getElementById('shorturl__contain');
const $defaulturl = document.getElementById('default__url');
const $shorturl = document.getElementById('short__url');

let shortenUrl = "";

$menuButton.addEventListener("click", () =>{
    $menu.classList.toggle("menu-flex");
    $menu.classList.toggle("menu-none");
})

$form.addEventListener('submit',async (e) => {
    e.preventDefault();
    if($input.value === ""){
        $input.classList.remove('input__valid');
        $input.classList.add('input__invalid');
    } else {
        $copy.textContent = "Copy";
        $copy.classList.remove('background__active');
        $copy.classList.add('button');
        $input.classList.remove('input__invalid');
        $input.classList.add('input__valid');
        shortenUrl = await shortUrl();
        displayShortUrl(shortenUrl);
    }
})

const displayShortUrl = (pepe) => {
    $shorturl__contain.classList.remove('nodisplay__url'); 
    $defaulturl.textContent = $input.value;
    $shorturl.textContent = pepe;
}

$copy.addEventListener('click', () => {
    $copy.textContent = "Copied!";
    $copy.classList.remove('button');
    $copy.classList.add('background__active');
})

const shortUrl = async () => {
    let url = $input.value;
    let resp = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}/very/long/link.html`);
    let jason = await resp.json();
    return jason.result.short_link
}