const postId = getAnchor();
fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(res => res.json())
    .then(comments => {
        let innerHTML = ``;
        comments
            .filter(comment => comment.postId === Number(postId))
            .forEach((comment, i) => {
                const commentHTML = `
                    <div class="lessons">
                        <h2 class="heading">
                            Comment ${i + 1} 😊 ${comment.name}
                        </h2>
                        <h3>
                            By: ${comment.email}
                        </h3>
                        <p class="paragraph">
                            ${comment.body.substring(0, 50).trim().concat("...")}
                        </p>
                        <a href="comment.html#${comment.id}" class="read-more">Read full comment &rarr;</a>
                    </div>
                `;
                innerHTML = innerHTML + `\n\n` + commentHTML;
            });
        const contentElem = document.getElementById("content");
        contentElem.innerHTML = innerHTML;
    })
    .catch(err => document.body.textContent = `😓 Could not load lesson. Error occured: ${err}. Please try again`)

function getAnchor() {
    var currentUrl = document.URL,
    urlParts = currentUrl.split('#');
    return (urlParts.length > 1) ? urlParts[1] : null;
}
