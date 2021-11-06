const newCommentHandler = async (event) => {
    event.preventDefault();
  alert("Postit")
    const comment_text = document.querySelector('#comment').value.trim();
  
    if (comment_text) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comment_text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  alert(comment_text)
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create comment');
      }
    }
  };

// alert("Linked")
document
  .querySelector('.comment-form')
  .addEventListener('submit', newCommentHandler);




