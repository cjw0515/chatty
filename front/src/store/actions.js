// 컴포넌트에서 상태변경을 일으키는 이벤트를 생성한다.
// state의 변경은 action에서 일어나는 것이 아니라 mutation에 커밋될 때 일어난다. 임의의 비동기 처리를 포함할 수 있다.

import {
    GET_CHANNELS, SET_MESSAGES,    
  } from './mutation-types'

  export default {    
    [SET_MESSAGES] ({commit}, message){
      commit(SET_MESSAGES, message)
    },
    // [GET_CHANNELS] ({commit}) {
    //   let json = {
    //       channels: ["channel1", "channel2"]
    //   }      
    //   commit(GET_CHANNELS, json.channels)
    // },
    [GET_CHANNELS] ({commit}) {
      // fetch('https://us-central1-demoapp-1779c.cloudfunctions.net/v1/channels').then((response) => {
      //   return response.json()
      // }).then((json) => {
      //   commit(GET_CHANNELS, json.channels)
      // })
      
      async function fetch_api(){
        // const prodApi = 'https://us-central1-demoapp-1779c.cloudfunctions.net/v1/'
        // const devApi = 'http://localhost:5001/chatty-f2692/us-central1/v1/'
        
        const response = await fetch('devApi')
        const json = await response.json()
        commit(GET_CHANNELS, json.channels)
      }
      fetch_api()
    }    
  }
  
  