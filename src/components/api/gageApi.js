import axios from 'axios'

export const getGageList = async (code) => {
  const res = await axios.get(`/gage/list?code=${code}`)
  const gageList = await res.data.data
  return gageList
}

export const getGageCountByCode = async (code, dong) => {
  const res = await axios.get(`/gage/count?code=${code}&dong=${dong}`)
  const gageCount = await res.data.data
  return gageCount
}

export const getGageCount = async (dong) => {
  const res = await axios.get(`/gage/cnt?dong=${dong}`)
  const gageCount = await res.data.data
  return gageCount
}
