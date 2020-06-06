
  import { NAMESPACE } from './cakesConsts';
  
  
  export default {
    namespace: NAMESPACE,
  
    state: {
     
      sampleData: {}
    },
  
    effects: {
      *actionSample({ payload }, { call, put }) {
        
      
        console.log("resp",payload)
        yield put({
          type: 'sampleData',
          payload:payload,
        });
      
      },
    },
  
    reducers: {
      sampleData(state, action){
        return {
          ...state,
          sampleData: action.payload,
        }
      }
    },
  };