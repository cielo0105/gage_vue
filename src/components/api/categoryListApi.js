import axios from 'axios'

export const getMainList = async () => {
  const res = await axios.get(`/gage/main`)
  console.log(res)
  const mainList = await res.data.data
  return mainList
}

export const getMiddleList = async (main) => {
  const res = await axios.get(`/gage/middle?main=${main}`)
  console.log(res)
  const middleList = await res.data.data
  return middleList
}

export const getSubList = async (mid) => {
  const res = await axios.get(`/gage/sub?mid=${mid}`)
  console.log(res)
  const subList = await res.data.data
  return subList
}

export const getResult = async (sub) => {
  const res = await axios.get(`/gage/result?sub=${sub}`)
  console.log(res)
  const result = await res.data.data
  return result
}
