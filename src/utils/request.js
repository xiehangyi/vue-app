import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: '' // api的base_url
})


// request interceptor
service.interceptors.request.use(config => {
  console.log(config)
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
  response => {
    let data = response.data
    return data
  },
  error => {
    return Promise.reject(error)
  }
)

export default async (options) => {
  let res = await service(options)
  return res
}
