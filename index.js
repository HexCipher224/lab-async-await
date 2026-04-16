// Write your code here!
// Display function
function displayPosts(posts) {
    const postList = document.getElementById("post-list");

    posts.forEach(post => {
    const li = document.createElement("li");

    const h1 = document.createElement("h1");
    h1.textContent = post.title;

    const p = document.createElement("p");
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);

    postList.appendChild(li);
});
}

// Async fetch function
async function fetchPosts() {
try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    displayPosts(posts); // VERY IMPORTANT
} catch (error) {
    console.error(error);
}
}

// Call function
fetchPosts();