// 컴포넌트에서 상태변경을 일으키는 이벤트를 생성한다.
// state의 변경은 action에서 일어나는 것이 아니라 mutation에 커밋될 때 일어난다. 임의의 비동기 처리를 포함할 수 있다.

import {
    GET_CHANNELS,
    // SET_MESSAGES
  } from './mutation-types'

  export default {
    [GET_CHANNELS] ({commit}) {
      let json = {
          channels: ["channel1", "channel2"]
      }      
      commit(GET_CHANNELS, json.channels)
    },
  }
  
  