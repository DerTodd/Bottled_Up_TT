const newFormHandler = async (event) => {
    event.preventDefault();
    alert("create post")
    const name = document.querySelector('#post_name').value.trim();
    const post_content = document.querySelector('#post_content').value.trim();
  alert(name)
  alert(post_content)
    if (name && post_content) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ name, post_content }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/posts');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);
  
  
  