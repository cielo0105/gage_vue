import axios from 'axios'

export const getNewsList = async () => {
  const res = await axios.get(`/news/list`)
  const newsList = await res.data.data
  return newsList
}

export const getPolicyList = async () => {
  const res = await axios.get(`/news/info`)
  const infoList = await res.data.data
  return infoList
}

export const getSupportList = async () => {
  const res = await axios.get(`/news/support`)
  const supportList = await res.data.data
  return supportList
}
