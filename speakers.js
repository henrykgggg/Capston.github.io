const speakers =[
    {
        name:'james',
        src:'/.images/yoo.jpg',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble."
    },
    {
        name:'chriss',
        src:'/images/yoo.jpg',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble."
    },
    {
        name:'jadden',
        src:'/images/yoo.jpg',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble."
    }
]

const speakersContainer = document.getElementById('speakersContainer')


function speakerInfo (index){
const spekerCard =document.createElement('div')
spekerCard.classList.add('speakerCard')
speakersContainer.appendChild(spekerCard)
spekerCard.innerHTML =` 
<div class="main-contain">
<img class="img" src=${speakers[index].src} />
<div class="holder">
<h2 class="speakerName">${speakers[index].name}</h2>

<p class="paragraph">${speakers[index].description}</p>
</div>
</div>
<div>
<button class="btn-click">More</button>
</div>
`
}

for(let i=0;i<speakers.length;i++){
    speakerInfo(i)
}