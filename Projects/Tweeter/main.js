    const tweeter = Tweeter()
    const renderer = Renderer()

    renderer.renderPosts(tweeter.getPosts())

    const addTweet = $("#post").on("click", function() {
        tweeter.addPost($("#input").val())
        renderer.renderPosts(tweeter.getPosts())
    })

    const addCommenta = $(document).on("click", ".but", function() {
        const commentPost = $(this).closest("div.post").data("id")
        const commentText = $(this).closest("div.post").find("input").val()

        tweeter.addComment(commentText, commentPost)
        renderer.renderPosts(tweeter.getPosts())
    })
   

    const deletePost = $(document).on("click", ".delete", function() {
        tweeter.removePost($(this).closest(".post").data("id"))
        renderer.renderPosts(tweeter.getPosts())
    })

    const deleteComment = $(document).on("click",".delete-comment", function() {
        const commentId = $(this).closest("div").data("id")
        const postId = $(this).closest("div.post").data("id")
        tweeter.removeComment(postId, commentId)
        renderer.renderPosts(tweeter.getPosts())
    })