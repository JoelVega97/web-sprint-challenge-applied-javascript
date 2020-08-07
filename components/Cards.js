// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//

//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const cardContainer = document.querySelector('.cards-container')

fetch('https://lambda-times-api.herokuapp.com/articles')
    .then(function(res){
        console.log(res)
        return res.json()
    })

    .then(function(parsedRes){
        console.log(parsedRes.articles)
        let javascriptArray  = parsedRes.articles.javascript
        //JS CARDS
        javascriptArray.forEach(element => {
            let newCardJS = cardMaker(element)
            cardContainer.appendChild(newCardJS)
        });
        //BOOTSTRAP CARDS
        let bootstrapArray = parsedRes.articles.bootstrap

        bootstrapArray.forEach(element => {
            let newCardBoot = cardMaker(element)
            cardContainer.appendChild(newCardBoot)
            console.log (newCardBoot)
        });
        //TECH CARDS
        let technologyArray = parsedRes.articles.technology

        technologyArray.forEach(element => {
            let newCardTech = cardMaker(element)
            cardContainer.appendChild(newCardTech)
        });
        //JQUERY CARDS
        let jqueryArray = parsedRes.articles.jquery

        jqueryArray.forEach(element => {
            let newCardJQ = cardMaker(element)
            cardContainer.appendChild(newCardJQ)
        });

        //NODE CARDS
        let nodeArray = parsedRes.articles.node

        nodeArray.forEach(element => {
            let newCardNode = cardMaker(element)
            cardContainer.appendChild(newCardNode)
        });

    })

    .catch(function(error){
        console.log('Seriously?')
    })


function cardMaker(dataObj){

    //ELEMENT CREATION
    let card = document.createElement('div')
    let headline = document.createElement('div')
    let author = document.createElement('div')
    let imgContainer = document.createElement('div')
    let img = document.createElement('img')
    let authorName = document.createElement('span')

    //CLASSING
    card.className = 'card'
    headline.className = 'headline'
    author.className = 'author'
    imgContainer.className = 'img-container'

    //Text
    headline.textContent = `${dataObj.headline}`
    authorName.textContent = `By ${dataObj.authorName}`

    //SRC
    img.src = `${dataObj.authorPhoto}`
    
    //SETUP
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    author.appendChild(authorName)


    card.addEventListener('click', function(event){
        console.log(`${dataObj.headline}`)
    })

    return card
}

// cardContainer.appendChild(cardMaker({
//     headline: 'Does this work?',        
//     authorName: 'I hope it does',
//     authorPhoto: "https://tk-assets.lambdaschool.com/08d1372e-e393-47f1-ac44-fcb7d0baf0e2_sir.jpg",

// }))

// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>