import axios from 'axios'

export const getAptList = async (code) => {
  const res = await axios.get(`/house/aptinfo?code=${code}`)
  const aptList = await res.data.data
  return aptList
}
