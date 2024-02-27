function observeStore(store, select, onChange) {
  let currentState;

  function handleChange() {
    let nextState = select(store.getState());
    if (nextState !== currentState) {
      currentState = nextState;
      onChange(currentState);
    }
  }

  let unsubscribe = store.subscribe(handleChange);
  handleChange();
  return unsubscribe;
}

const CUSTOM_EVENT_NAME_SUFFIX = 'StateObserver';

export class GlobalEventDistributor {
  constructor() {
    this.stores = {};
  }

  registerStore(appName, store) {
    this.stores[appName] = store;
  }

  // make this async dispatch function return the updated state after action is dispatched and the store is updated with observerStore function
  async dispatch(appName, actionType, selector) {
    this.stores[appName].dispatch({ type: actionType });
    return new Promise((resolve) => {
      const unsubscribe = observeStore(
        this.stores[appName],
        selector,
        (currentState) => {
          const event = new CustomEvent(
            `${appName}${CUSTOM_EVENT_NAME_SUFFIX}`,
            {
              detail: {
                appName,
                state: currentState,
              },
            },
          );
          console.log('dispatching event');
          window.dispatchEvent(event);
          resolve(currentState);
        },
      );

      unsubscribe();
    });
  }

  stateChangeListener(appName, callback) {
    window.addEventListener(`${appName}${CUSTOM_EVENT_NAME_SUFFIX}`, callback);
    return {
      remove: () => {
        window.removeEventListener(
          `${appName}${CUSTOM_EVENT_NAME_SUFFIX}`,
          callback,
        );
      },
    };
  }
}
