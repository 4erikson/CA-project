fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts => {
        let innerHTML = ``;
        posts.forEach((post, i) => {
            const postHTML = `
                <div class="lessons">
                    <h2 class="heading">
                        Lesson ${i + 1} 😊 ${post.title}
                    </h2>
                    <p class="paragraph">
                        ${post.body.substring(0, 50).trim().concat("...")}
                    </p>
                    <a href="lesson.html#${post.id}" class="read-more">Read more &rarr;</a>
                </div>
            `;
            innerHTML = innerHTML + `\n\n` + postHTML;
        });
        const contentElem = document.getElementById("content");
        contentElem.innerHTML = innerHTML;
    })
    .catch(err => document.body.textContent = `😓 Could not load lessons. Error occured: ${err}. Please try again`)
