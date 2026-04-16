// Write your code here!
function displayPosts(posts) {
    const postList = document.getElementById("post-list");

    //clear existing content 
    postList.innerHTML = "";

    posts.forEach(posts => {
        //create elements
        const li = document.createElement("li");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");

        //set content
        h1.textContent = postList.title;
        p.textContent = postList.body;

        //Append elements
        li.appendChild(h1);
        li.appendChild(p);
        postList.appendChild(li);
    });
}

//A sync function to fetch posts
async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        //convert response to JSON 
        const data = await response.json();

        //call display function
        displayPosts(data);

    } catch (error) {
        console.error("Error fetching posts:", error);
    }
    }

//Call function when page loads
getPosts();
