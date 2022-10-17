import axios from 'axios';

export const getPosts = () => {
  return axios.get('/api/posts/')
};

export const getPost = id => {
  return axios.get(`/api/posts/${id}`)
};

export const getUserPosts = id => {
  return axios.get(`/api/posts/user/${id}`)
};

export const writePost = data => {

  return axios.post('/api/posts/upload', data)
}

export const updatePost = data => {
  return axios.patch(`api/posts/update/${data._id}`, data)
}

export const deletePost = id => {
  return axios.delete(`/api/posts/${id}`)
}