import axios from 'axios';

//temporary
export const getComments = () => {
  return axios.get('/api/comments')
};

export const getComment = id => {
  return axios.get(`/api/comments/${id}`)
};

export const getPostComments = postId => {
  return axios.get(`/api/comments/post/${postId}`)
};

export const writeComment = data => {
  return axios.post('/api/comments', data)
};

export const deleteComment = id => {
  return axios.delete(`/api/comments/${id}`)
};

export const updateComment = data => {
  return axios.patch(`api/comments/update/${data._id}`, data)
};