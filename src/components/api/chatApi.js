import { localAxios} from '@/util/http-commons'

const local = localAxios()

const url = '/chat'

const getList = (user, success, fail) => {
  local.get(`${url}/list`, { params: user }).then(success).catch(fail)
}

const getMessages = (chatId, success, fail) => {
    local.get(`${url}/msgs?chatId=${chatId}`).then(success).catch(fail)
  }
export {getList,  getMessages}
