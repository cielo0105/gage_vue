import axios from 'axios'
// 지도 범위에 있는 동 리스트 구하기
export const getLocalPeopleRank = async (code) => {
  const res = await axios.get(`/report/rank?code=${code}`)
  const peopleRank = await res.data.data
  return peopleRank
}
