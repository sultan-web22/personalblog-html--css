
let blogContent = '';

function letterscountValidation() {

  const textarea = document.getElementById('message');
  const errorDisplay = document.getElementById('error-message'); 
  
  if (textarea.value.length <= 30) {
    alert('Character count must be greater than 30.');
    return false;
  }
  return true;
}

function initBlogSubmission() {
  const button = document.getElementById('submit-blog');
  const textarea = document.getElementById('message');
  const titleInput = document.getElementById('title-text');

  if (!button) return;

  button.addEventListener('click', () => {

    if (letterscountValidation()) {
      // Capture current input values
      const title = titleInput.value;
      const body = textarea.value;

      // Call the posting function with the data
      createNewPost(title, body);

      titleInput.value = '';
      textarea.value = '';
    }
  });
}


function createNewPost(title, content) {

  const blogFeed = document.querySelector('.right-area');
  if (!blogFeed) return;


  const newPost = document.createElement('article');
  newPost.className = 'item'; 


  newPost.innerHTML = `
    <div class="blog-meta">
        <span class="category tag-daily">Daily</span>
        <time datetime="${new Date().toISOString().split('T')[0]}">Just Now</time>
    </div>
    <h3>${title || 'Untitled Thought'}</h3>
    <p>${content}</p>
    <a href="#" class="read-more">Read Full Story →</a>
  `;

  blogFeed.prepend(newPost);
}


window.addEventListener('DOMContentLoaded', () => {
  initBlogSubmission();
});