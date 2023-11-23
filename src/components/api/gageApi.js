import axios from 'axios'

export const getGageList = async (code) => {
  const res = await axios.get(`/gage/list?code=${code}`)
  const gageList = await res.data.data
  return gageList
}

// 동단위로 가게 개수 찾기 (+업종 코드로 찾기)
export const getGageCount = async (dong, code) => {
  let url = `/gage/count?dong=${dong}`
  if (code !== '') {
    url += `&code=${code}`
  }

  const res = await axios.get(url)
  const gageCount = res.data.data
  return gageCount
}
