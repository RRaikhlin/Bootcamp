

//Ex1
/*
const StringFormatter = function(string) {

  const capitalizeFirst = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const toSkewerCase = function(string){
    return string.replace(/\s+/g, "-")
  }

 return {
  capitalizeFirst : capitalizeFirst,
  toSkewerCase : toSkewerCase
 }

}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should return Dorothy
console.log(formatter.toSkewerCase("blue box")) //should return blue-box

//ex2
const Bank = function() {
  let money = 500
  const deposit = function(money1) {
    money += money1 
  }

  const showBalance = function() {
    return money
  }

return {
  deposit : deposit,
  showBalance : showBalance
}
}

const bank = Bank()
console.log(bank.deposit(200))
console.log(bank.deposit(250))
console.log(bank.showBalance()) //should print 950
*/

/*
//Ex3
const SongsManager = function(name1, str) {
 

  let songs =[] 
 

const addSong = function (song, adress) {
  let son ={
      named : name1,
     adressed : str
  }

  son.named = song
  son.adressed=adress
  songs.push(son)
}

const getSong = function(string){
  
  return songs.filter(s => s.named === string )
}

return {
  addSong : addSong,
  getSong : getSong
}

}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

console.log(songsManager.getSong("sax")) // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
*/

//TWEETER

const Tweeter = function() {

let post
const posts = [
  {
      text: "First post!",
      id: "p1",
      comments: [
          { id: "c1", text: "First comment on first post!" },
          { id: "c2", text: "Second comment on first post!!" },
          { id: "c3", text: "Third comment on first post!!!" }
      ]
  },
  {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
          { id: "c4", text: "Don't wory second poster, you'll be first one day." },
          { id: "c5", text: "Yeah, believe in yourself!" },
          { id: "c6", text: "Haha second place what a joke." }
      ]
  }
]

let postIdCounter = 3
let commentIdCounter = 7

getPosts = function () {
  return posts
}

addPost = function (text) {
  if (text.trim ==""){ return}

   post ={
    text : text,
    id : "p" + postIdCounter,
    comments : [],
   }

  postIdCounter++
  posts.push(post)
  
}

removePost = function (postId) {
    let index = getPostIndex(postId)
    return  index < 0 ? false : posts.splice(index, 1)
}

getPostIndex = function(postId) {
  return posts.findIndex(post => post.id === postId)
  
}

addComment = function (text, postId) {
  let ind = getPostIndex(postId)
  if (ind > -1 && text.trim !=""){
    const post = posts[ind]
    const com = post.comments
    let comment = {
      id : "c" + commentIdCounter,
      text : text
    }
    com.push(comment)
    commentIdCounter++
  } 
}

removeComment = function (postId, commentId) {
  ind = getPostIndex(postId) 
  if (ind < 0) {return}
  const comments = posts[ind].comments
  comments.splice(comments.findIndex(com => com.id == commentId) , 1)

}




return {
  getPosts : getPosts,
  addPost : addPost,
  removePost : removePost,
  addComment : addComment,
  removeComment : removeComment
}

} 

/*
const tweeter = Tweeter()
tweeter.addPosts('first')
tweeter.addPosts('second')
tweeter.removePost(1)
console.log(tweeter.getPosts()[0])
tweeter.addComment(2, "first_comment")
tweeter.addComment(2, "second_comment")
tweeter.removeComment(2, 2)
*/

const tweeter = Tweeter()

tweeter.addPost("This is my own post!")
console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

tweeter.removePost("p1")
console.log(tweeter.getPosts())
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}

//============================
//============================
//Stop here
//Make sure everything works. Then keep going
//============================
//============================

tweeter.addComment("Damn straight it is!", "p3")
tweeter.addComment("Second the best!", "p2")
console.log(tweeter.getPosts())
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}

tweeter.removeComment("p2", "c6")
console.log(tweeter.getPosts())
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}
