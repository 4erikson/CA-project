const commentId = getAnchor();
fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
    .then(res => res.json())
    .then(comment => {
        const contentElem = document.getElementById("content");
        contentElem.innerHTML = `
        <div class="lessons">
            <h2 class="heading">
                Comment ${commentId} 😊 ${comment.name}
            </h2>
            <h3>
                By: ${comment.email}
            </h3>
            <p class="paragraph">
                ${comment.body}
            </p>
        </div>
    `;;
    })
    .catch(err => document.body.textContent = `😓 Could not load lesson. Error occured: ${err}. Please try again`)

function getAnchor() {
    var currentUrl = document.URL,
    urlParts = currentUrl.split('#');
    return (urlParts.length > 1) ? urlParts[1] : null;
}
