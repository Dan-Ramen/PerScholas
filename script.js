let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
    
    // Do all of your work inside the document.addEventListener  

    // Part 1 : DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-title ID element. Remember there are a couple of ways to query id. Change the text of the title to something shorter.
    document.querySelector('#main-title').textContent = 'something shorter'

    // Part 2: Select the <body> and change the background-color to a new color of your choice.
    document.body.style.backgroundColor = 'grey'

    // Part 3: Select DOM's Favorite Things list and remove the last list item.
    let a = document.getElementById('favorite-things').getElementsByTagName('li');
    console.log(a[5].innerHTML)
    document.getElementById('favorite-things').removeChild(a[5])

    // Part 4: Select all .special-title class elements and change their font-size to 2rem. Remember you might have to iterate through the list of elements
    let specialTitles = document.getElementsByClassName('special-title')
    
    for(let i = 0; i < specialTitles.length; i++){
    let specialTitle = specialTitles[i];
    specialTitle.style.fontSize = '2rem'
}
    
    // Part 5: Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
    let r = document.getElementById('past-races').getElementsByTagName('li');
    console.log(r[3].innerHTML)
    document.getElementById('past-races').removeChild(r[3])

    // Part 6: Let's add to DOM's Past Races list. Create a new <li> element, change the new <li> text to the name of a city, and append it to the Past Races list.
    let li = document.createElement('li')
    li.textContent = 'New York'
    document.getElementById('past-races').appendChild(li)

    // Part 7: Create a new .blog-post corresponding to the new city added in Part 6. You will have to create a new <div> with class of .blog-post, a new <h2> with text, and a new <p> with some text. Think about what order you want to create the elements, and what order you want to append them in.
    let mainTag = document.querySelector('.main')

    let divEl = document.createElement('div')
    divEl.setAttribute('class', 'blog-post purple')
    mainTag.appendChild(divEl) 

    let h1El = document.createElement('h1')
    h1El.textContent = 'New York'
    divEl.appendChild(h1El)

    let pEl = document.createElement('p')
    pEl.textContent = 'I drifted through Times Square!'
    divEl.appendChild(pEl)

    ///////////////////
    // EVENT HANDLERS
    ///////////////////
    // Part 8: When you reload the page, the script.jsfile loads a random DOM quote. Let's play with the included function: Query select the #quote-title ID element and add a click event handler. That event handler should use the function randomQuote whenever #quote-title is clicked.
    const click = document.querySelector('#quote-title');
    click.addEventListener('click', function(evt){
        randomQuote()
    })

    // Part 9: Select all .blog-post class elements. Iterate through the list of .blog-post class elements and apply two event handlers to each node. The first event handler should be listening for mouseoutevents while the second handler should be listening for mouseenterevents.

    let blogPosts = document.querySelectorAll('.blog-post');

    for(let i = 0; i < blogPosts.length; i++){
        let blogPost = blogPosts[i];
        console.log(blogPost.classList)
        blogPost.addEventListener('mouseout', function(evt){
            console.log('over')
            blogPost.classList.toggle('purple')
        })
        blogPost.addEventListener('mouseenter', function(evt){
            console.log('enter')
            blogPost.classList.toggle('red')
        })
    }

  });