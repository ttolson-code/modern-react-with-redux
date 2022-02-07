// People dropping off a form (Action Creators).
const createPolicy = (name, amount) => {
  // Return an Action (a form in our analogy).
  return {
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect
    }
  };
};

// Reducers (Departments).
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM') {
    // We care about this action (FORM!)
    return [...oldListOfClaims, action.payload];
  }
  
  // We don't care the action (form!!)
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }
  
  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY') {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY') {
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  
  return listOfPolicies;
};

const { createStore, combineReducers } = Redux;

// Properties to our state object will be equal our 'key' names.
// Convention to name reducer the same as 'key' but not required.
const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

// With redux you can only modify the state object through the use
// of the dispatch function and the action creators. There is no way to 
// manually reach into the store and modifty the state. 

const store = createStore(ourDepartments);

store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Jim', 30));
store.dispatch(createPolicy('Bob', 40));
store.dispatch(createClaim('Alex', 120));
store.dispatch(createClaim('Jim', 50));
store.dispatch(deletePolicy('Bob'));

console.log(store.getState());

// Redux Cycle:

// To Change the state of our app, we call an...
// Action Creator

// Which produces an...
// Action (Object)

// Which gets fed to...
// dispatch (function that makes copies)

// Forwards the action to the...
// Reducers (process the actions, modify the data, and returns as updated state)

// Creates new...
// State 