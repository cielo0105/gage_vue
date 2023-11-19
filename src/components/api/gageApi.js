import axios from 'axios'

export const getGageList = async (code) => {
  const res = await axios.get(`/gage/list?code=${code}`)
  console.log(res)
  const gageList = await res.data.data
  return gageList
}
