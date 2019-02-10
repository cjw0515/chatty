// state의 상태를 변경하는 역할을 한다. vuex에서 store의 상태를 변경하는 방법은 mutation을 커밋하는 방법밖에 없다.
 
import {
    SET_MESSAGES,
     GET_CHANNELS 
} from './mutation-types'

export default {
    [GET_CHANNELS](state, channels) {
      state.channels = channels
    },
    [SET_MESSAGES](state, messages) {
      state.messages = messages
    }
  }