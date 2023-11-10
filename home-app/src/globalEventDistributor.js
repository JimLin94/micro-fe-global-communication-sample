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
      observeStore(this.stores[appName], selector, (currentState) => {
        resolve(currentState);
      });
    });
  }
}
