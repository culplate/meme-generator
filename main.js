// anime: ShitPostCrusaders, Animemes, 
// hentai: hentaimemes
// depression: depression_memes
// wtf: ComedyNecrophilia, okbuddyretard
// art memes: trippinthroughtime
// programming: ProgrammerHumor
// f1: formuladank
// history: HistoryMemes
// politics: PoliticalCompassMemes

// Tasks: 1. Add library for photos
// 2. Finalize styles

let inputVal = '';
const generateBtn = document.querySelector('.generate-meme-btn');
const memeImg = document.querySelector('.meme-img');
const memeTitle = document.querySelector('.meme-title');
const memeSubr = document.querySelector('.meme-subr');
const memeAuthor = document.querySelector('.meme-author');

function generateMeme() {
    const inputs = document.getElementsByName('meme-topic');

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            inputVal = inputs[i].value
            memeSubr.innerHTML = inputVal;
        }
    }

    if (inputVal === '') {
        memeTitle.innerHTML = 'Choose category first!'
        return;
    }

    fetch(`https://meme-api.com/gimme/${inputVal}`)
        .then((response) => response.json())
        .then(({ url, title, author }) => {
            memeImg.setAttribute('src', url);
            memeTitle.innerHTML = title;
            memeAuthor.innerHTML = author;
        })
}

function openFullSreen() {
    const instance = basicLightbox.create(`
        <img class="fullscale-img" src="${memeImg.getAttribute('src')}">
    `);
    instance.show();

    document.addEventListener('keydown', evt => {
        if (instance.visible() && evt.key === "Escape" || evt.key === " ")
            instance.close();
    });
}

generateBtn.addEventListener('click', generateMeme);
memeImg.addEventListener('click', openFullSreen);