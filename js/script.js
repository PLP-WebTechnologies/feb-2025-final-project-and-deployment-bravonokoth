// Sample blog posts data (in a real app, this could come from an API)
const posts = [
    {
      title: "My First Blog Post",
      excerpt: "This is a short summary of my first blog post.",
      content: "Full content of the first post.",
    },
    {
      title: "Learning Web Development",
      excerpt: "Tips and tricks for beginners in web development.",
      content: "Full content of the second post.",
    },
    {
      title: "Why I Love Coding",
      excerpt: "My journey into the world of programming.",
      content: "Full content of the third post.",
    },
  ];
  
  // Load featured posts on Home page
  function loadFeaturedPosts() {
    const featuredPostsContainer = document.getElementById("featured-posts");
    if (featuredPostsContainer) {
      featuredPostsContainer.innerHTML = posts
        .slice(0, 3)
        .map(
          (post) => `
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-2">${post.title}</h3>
              <p class="text-gray-600">${post.excerpt}</p>
              <a href="./pages/blog.html" class="text-blue-600 hover:underline mt-4 inline-block">Read More</a>
            </div>
          `
        )
        .join("");
    }
  }
  
  // Load all posts on Blog page
  function loadBlogPosts() {
    const blogPostsContainer = document.getElementById("blog-posts");
    if (blogPostsContainer) {
      blogPostsContainer.innerHTML = posts
        .map(
          (post) => `
            <div class="bg-white p-6 rounded-lg shadow-md">
              <h3 class="text-xl font-bold mb-2">${post.title}</h3>
              <p class="text-gray-600">${post.excerpt}</p>
              <p class="text-gray-800 mt-4">${post.content}</p>
            </div>
          `
        )
        .join("");
    }
  }
  
  // Handle contact form submission
  function handleContactForm() {
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
  
        if (name && email && message) {
          formMessage.textContent = "Thank you for your message!";
          formMessage.classList.add("text-green-600");
          form.reset();
        } else {
          formMessage.textContent = "Please fill out all fields.";
          formMessage.classList.add("text-red-600");
        }
      });
    }
  }
  
  // Initialize functions based on page
  document.addEventListener("DOMContentLoaded", () => {
    loadFeaturedPosts();
    loadBlogPosts();
    handleContactForm();
  });