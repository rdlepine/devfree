const api = "http://simplesemisolutions.com:5000/api"
//const api = "http://localhost:5000/api"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const doRegister = (user) => {
    return fetch(`${api}/users/register`, {
        method: 'POST',
        headers: {
          ...headers,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      }).then(res => res.json())
        .then( data => {
          console.log(data)
          return data
        })
        .catch( (err) => console.log(err))
}

export const doLogin = (user) => {
  return fetch(`${api}/users/login`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then(res => {
         return res.json()
       }
      )
      .then( data => {
        return data
      })
      .catch( (err) => console.log("Err", err))
}

export const postVideo = (video) => {
    return fetch(`${api}/videos/postvideo`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(video)
    }).then(res => {
       console.log('res')
       // return res.json()
    }).catch((err) => {
       console.log("ERRRR", err)
    })
  }

export const getAll = () => 
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(posts => posts)

export const getCategoryPosts = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getPostDetails = (id) => 
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json()) 
    .then(post => post)    

export const deletePost = (id) =>
    fetch(`${api}/posts/${id}`, {
        method: 'DELETE',
        headers
      }
    ).then( res => res)

 export const addPost = (post) => 
    fetch(`${api}/posts`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    }).then(res => res.json())

export const updatePost = (id, post) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
}).then(res => { 
    return res.json()
  }
).catch( err => console.log("err", err))

export const deleteComment = (id) =>
    fetch(`${api}/comments/${id}`, {
        method: 'DELETE',
        headers
      }
    ).then( res => res)

export const getCategories = (categories) =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const vote = (post, vote) =>
  fetch(`${api}/posts/${post.id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option: vote })
  }).then(res => res.json())

  export const voteComment = (comment, vote) =>
    fetch(`${api}/comments/${comment.id}`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ option: vote })
    }).then(res => res.json())

export const getPostComments = (id) => 
  fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)
  
export const addComment = (id, options) => 
    fetch(`${api}/comments/`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(options)
    }).then(res => res.json())

    export const updateComment = (id, comment) => 
    fetch(`${api}/comments/${id}`, {
      method: 'PUT',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comment)
    }).then(res => res.json())