import { localAxios } from '@/util/http-commons'

const local = localAxios()

const url = '/deal'

const registDeal = (deal, success, fail) => {
  local.post(`${url}/regist`, JSON.stringify(deal)).then(success).catch(fail)
}

export { registDeal }
