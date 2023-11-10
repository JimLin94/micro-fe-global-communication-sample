const INCREMENT = 'HOME_INCREMENT';
const CLEAR = 'HOME_CLEAR';

export default function homeNotificationReducer(state = { count: 3 }, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case CLEAR:
      return { count: 0 };
    default:
      return state;
  }
}
