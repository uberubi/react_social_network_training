import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "31fca19b-46d4-4562-87ef-a79218334047"
  }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10)  {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
       .then(response => response.data)
   },
   follow(userId) {
    return instance.post(`follow/${userId}`)
       .then(response => response.data)
   },
   unfollow(userId) {
    return instance.delete(`follow/${userId}`)
       .then(response => response.data)
   }
  }