// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: 
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const topicsContainers = document.querySelector('.topics')

axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(function (res){
        const topicNames = res.data.topics
        topicNames.forEach(element => {
            let topic = document.createElement('div')
            topic.className = 'tab'
            topic.textContent = `${element}`
            topicsContainers.appendChild(topic)
            
            topic.addEventListener('click', function(event){
                topic.classList.toggle('active-tab')
            })
        });
    })
    .catch(function(error){
        console.log('dammit')
    })