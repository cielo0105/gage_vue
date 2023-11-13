import axios from 'axios'

export const getAptDealInfo = async (code) => {
  const res = await axios.get(`/house/dealinfo?aptNo=${code}`)
  const apt = await res.data.data[0]
  return apt
}
