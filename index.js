// Write your code here!
// Function to display posts
function displayPosts(posts) {
  const postList = document.getElementById("post-list");

  posts.forEach(post => {
    // Create elements
    const li = document.createElement("li");
    const title = document.createElement("h1");
    const body = document.createElement("p");

    // Set content
    title.textContent = post.title;
    body.textContent = post.body;

    // Append elements
    li.appendChild(title);
    li.appendChild(body);
    postList.appendChild(li);
  });
}

// Async function to fetch posts
async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    // Call display function
    displayPosts(data);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

// Call the function
fetchPosts();