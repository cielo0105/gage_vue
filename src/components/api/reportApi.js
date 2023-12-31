import axios from 'axios'
// 지도 범위에 있는 동 리스트 구하기
export const getLocalPeopleRank = async (code) => {
  const res = await axios.get(`/report/rank?code=${code}`)
  const peopleRank = await res.data.data
  return peopleRank
}

export const getGageRank = async (code, dong) => {
  const res = await axios.get(`/report/gagerank?code=${code}&dong=${dong}`)
  const gageRank = await res.data.data
  return gageRank
}

export const getIndicator = async (code) => {
  const res = await axios.get(`/report/indicator?code=${code}`)
  const indicator = await res.data.data
  return indicator
}
