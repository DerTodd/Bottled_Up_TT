const newCommentHandler = async (event) => {
    event.preventDefault();
  //alert("Postit")
  
    const comment_text = document.querySelector('#comment').value.trim();
    //alert(comment_text)
    const post_id = document.getElementById('postid').innerHTML;
    
    //alert(post_id)
    if (comment_text) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comment_text, post_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  //alert(comment_text)
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




