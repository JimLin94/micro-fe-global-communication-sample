const INCREMENT = 'HEADER_INCREMENT';
const CLEAR = 'HEADER_CLEAR';

export default function headerNotificationReducer(
  state = { count: 3 },
  action,
) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case CLEAR:
      return { count: 0 };
    default:
      return state;
  }
}
