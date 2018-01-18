import {CHANGE_TITLE} from '../actions/home';
const initState = {
  title: 'home'
}

export default (state = initState, action)=>{
  const {type,title} = action;
  switch (type){
    case CHANGE_TITLE:
      return Object.assign({},state,{title});
    default:
      return state;
  }
}