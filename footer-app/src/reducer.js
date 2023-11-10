const INCREMENT = 'FOOTER_INCREMENT';
const CLEAR = 'FOOTER_CLEAR';

export default function footerNotificationReducer(
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
