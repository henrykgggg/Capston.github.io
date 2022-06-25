const speakers =[
    {
        name:'james',
        subtittle:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        src:'./images/hll.jpg',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
        name:'chriss',
        subtittle:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        src:'./images/yoo.jpg',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
        name:'jadden',
        subtittle:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        src:'./images/thant.jpg',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
        name:'jadden',
        subtittle:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        src:'./images/yoo.jpg',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
        name:'jadden',
        subtittle:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        src:'./images/hll.jpg',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
        name:'jadden',
        subtittle:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        src:'./images/thant.jpg',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    }
]

const speakersContainer = document.getElementById('speakersContainer')


function speakerInfo (index){
const spekerCard =document.createElement('div')
spekerCard.className='speakerCard';
speakersContainer.appendChild(spekerCard)
spekerCard.innerHTML =` 
<div class ="speakers">
<div class="main-contain">
<div class="images">
<img  src=${speakers[index].src} />
</div>
<div class="holder">
<h2 class="speakerName">${speakers[index].name}</h2>
<hr class="horizontal">
<p class="subtittle"><i>${speakers[index].subtittle}</i></p>
<p class="paragraph">${speakers[index].description}</p>
</div>
</div>
<div>
</div>
</div>
`
}

for(let i=0;i<speakers.length;i++){
    speakerInfo(i)
}