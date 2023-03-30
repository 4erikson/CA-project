fetch(`https://jsonplaceholder.typicode.com/posts/${getAnchor()}`)
    .then(res => res.json())
    .then(post => {
        const contentElem = document.getElementById("content");
        contentElem.innerHTML = `
            <div class="lessons-div">
                <h1>Lesson ${post.id} 😊 ${post.title}</h1>
                <p class="paragraph">${post.body}</p>

                <a href="comments.html#${post.id}">Comments</a>
            </div>
        `;
    })
    .catch(err => document.body.textContent = `😓 Could not load lesson. Error occured: ${err}. Please try again`)

function getAnchor() {
    var currentUrl = document.URL,
    urlParts = currentUrl.split('#');
    return (urlParts.length > 1) ? urlParts[1] : null;
}
