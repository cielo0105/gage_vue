import axios from 'axios'

export const getDongList = async (bx, by, tx, ty) => {
  const res = await axios.get(`/gage/range?bx=${bx}&by=${by}&tx=${tx}&ty=${ty}`)
  const gageList = await res.data.data
  return gageList
}
