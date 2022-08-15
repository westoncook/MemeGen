/** Get HTML elements */

const topInput = document.querySelector('#top-text');
const bottomInput = document.querySelector('#bottom-text');
const imgInput = document.querySelector('#img');
const submit = document.querySelector('form');
const container = document.querySelector('#memes');

/** Retrieve values from user inputs */

function getInput(){
    return {
        topText: topInput.value,
        bottomText: bottomInput.value,
        img: imgInput.value
    }
}

/** Take image URL and create HTML img */

function createImg(img){
    let image = document.createElement('img');
    image.src = img;
    image.className = 'image';
    return image;
}

/** Check that input URL yields image */

function checkForImg(url){
    if(!/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url)){
        alert('Invalid Img URL. Please Try Again.');
        submit.reset();
        return false;
    }
    return true
}

/** Create container div for meme */

function createDiv(){
    let memeDiv = document.createElement('div');
    memeDiv.className = 'meme';
    return memeDiv;
}

/** Create text element for meme top text */

function createTopText(text){
    let header = document.createElement('div');
    header.innerText = text;
    header.className = 'top';
    return header;
}

/** Create text element for meme bottom text */

function createBottomText(text){
    let footer = document.createElement('div');
    footer.innerText = text;
    footer.className = 'bottom';
    return footer;
}

/** Set listeners to delete meme and show delete message overlay */

function createDeleteListeners(){
    let image = document.querySelector('.image');
    image.addEventListener('click', (e)=>{
        e.target.parentElement.remove();
    })
    image.addEventListener('mouseover', (e)=>{
        let btn = document.createElement('div');
        btn.className = 'delete';
        btn.innerText = "DELETE ME(ME)";
        btn.addEventListener('click', (e)=>{
            e.target.parentElement.remove()
        })
        e.target.parentElement.append(btn);
    })
    image.addEventListener('mouseout', ()=>{
        let btn = document.querySelector('.delete');
        btn.remove();
    })
}

/** put together all meme elements and prepend meme to page */

function buildMeme(){
    let { topText, bottomText, img } = getInput();
    // if (!checkForImg()){
    //     return
    // }
    let memeDiv = createDiv();
    let image = createImg(img);
    let top = createTopText(topText);
    let bottom = createBottomText(bottomText);
    memeDiv.append(image, top, bottom);
    container.prepend(memeDiv)
    submit.reset()
    createDeleteListeners()
}

/** Set listener for meme form */

submit.addEventListener('submit', (e)=>{
    e.preventDefault();
    buildMeme();
})
