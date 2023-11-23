import axios from 'axios'
// 지도 범위에 있는 동 리스트 구하기
export const getDongList = async (bx, by, tx, ty) => {
  const res = await axios.get(`/gage/range?bx=${bx}&by=${by}&tx=${tx}&ty=${ty}`)
  const gageList = await res.data.data
  return gageList
}

export const searchDong = async (dong) => {
  // 검색어 기준으로 동 검색
  const res = await axios.get(`/gage/dong?dong=${dong}`)
  const dongList = await res.data.data
  return dongList
}
