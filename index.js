// Write your code here!
async function fetchPosts() {
try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    displayPosts(posts);

} catch (error) {
    console.error("Fetch error:", error);
}
}

function displayPosts(posts) {
    const postList = document.getElementById("post-list");

  // safety check (prevents null error)
if (!postList) {
    console.error("post-list element not found in HTML");
    return;
    }

postList.innerHTML = "";

posts.forEach(post => {
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    h1.textContent = post.title;
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
});
}

// run function
fetchPosts();