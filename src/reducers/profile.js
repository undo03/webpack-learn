import {GET_PROFILE_INFO} from '../actions/profile';
const initState = {
  info: 'profile'
}

export default (state = initState, action)=>{
  const {type,info} = action;
  switch (type){
    case GET_PROFILE_INFO:
      return Object.assign({},state,{info});
    default:
      return state;
  }
}