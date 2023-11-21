import { localAxios, formDataAxios } from '@/util/http-commons'

const local = localAxios()
const form = formDataAxios()

const url = '/deal'

const registDeal = (deal, success, fail) => {
  local.post(`${url}/regist`, JSON.stringify(deal)).then(success).catch(fail)
}

const setImg = (img, success, fail) => {
  form.post(`${url}/img`, img).then(success).catch(fail)
}

const getList = (cords, success, fail) => {
  local.get(`${url}/list`, { params: cords }).then(success).catch(fail)
}

export { registDeal, setImg, getList }
