import { localAxios } from '@/util/http-commons'

const local = localAxios()

const url = '/member'

const registMember = (member, success, fail) => {
  local.post(`${url}/regist`, JSON.stringify(member)).then(success).catch(fail)
}

const loginMember = (member, success, fail) => {
  local.post(`${url}/login`, JSON.stringify(member)).then(success).catch(fail)
}

const sendAuthEmailNum = (email, success, fail) => {
  local.post(`/send-mail/email`, JSON.stringify(email)).then(success).catch(fail)
}

export { registMember, loginMember, sendAuthEmailNum }
