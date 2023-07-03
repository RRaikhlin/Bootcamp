const Renderer = function() {

    const renderPosts = function(posts) {
        const postDiv = $("#posts")
        postDiv.empty()

        for (let post of posts){
            const newPostDiv = $('<div data-id='+post.id+'><p>'+post.text+'</p></div>')
            newPostDiv.addClass("post")
            const commentDiv = postDiv.append(newPostDiv)

            
            for (let comment of post.comments){
                const newComment = $('<div data-id='+comment.id+'><span class=delete-comment>x </span>'+comment.text+'</div>')
                newComment.addClass("comments")
                newPostDiv.append(newComment)    
            }

        const inputComment = $("<input class='input-comment' type='text' placeholder='Got something to say'><div class='but'>Add Comment</div>")
        newPostDiv.append(inputComment)
        const deletePostButton = $("<button class='delete'> Delete Post </button>")
        newPostDiv.append(deletePostButton)   
        }

       
    }

    return {
        renderPosts : renderPosts
    }
}