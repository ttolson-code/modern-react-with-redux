import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

// When redux first boots up its going to call each 
// reducer one time (intialization).
export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});

/*

Rules of Reducers

1. Must return any value besides 'undefined'. Cannot be undefined during initilization or any other time.

2. Must produce 'state', or data to be used inside of an app using only previous state and the action object.

3. Must not reach 'out of itself' to decide what value to return (reducers are pure).

Example: 

export default (state, action) => {
  // Bad examples:
  return document.querySelector('input');
  return axios.get('/posts')

  // Good example:
  return state + action
};

4. Must not mutate its input 'state' argument (somehwat misleading!)

NOTE: When a reducer gets an array or object passed in as state, the state is a REFERENCE to the array or object. If you return that state, you're returning a reference to the same object - so even if you've changed a property or value on the state, it's still the same array/object.

An analogy:

Let's imagine the 'state' object a house. We will say the house is at address: 100 Mansions Street.

In redux, when we mutate state inside a reducer - what we're doing is manipulating/changing the object properties. In the house analogy, we would be remodeling the inside of the house. Although we made changes to the inside of the house, the address is still 100 Mansions Street, no matter what properties are changed, the address is the same.

This is a problem because if we do change the state in the reducer, we want the application to know, and re-render, but it won't because redux will only catch only a change in memory, aka a different object or array, or a house with a different address.

Examples of safe ways to update state in reducers:

Removing an element from an array: 

Bad:
state.pop()

Good:
state.filter(element => element !== 'hi')

Adding an element to an array:

Bad:
state.push('hi');

Good:
[...state, 'hi']

Replacing an element in an array:

Bad:
state[0] = 'hi'

Good:
state.map(element => element === 'hi' ? 'bye' : element)

Updating a property in an object:

Bad:
state.name = 'Sam'

Good:
{ ...state, name: 'Sam' }

Adding a property to an object:

Bad:
state.age = 30

Good:
{ ...state, age: 30 }

Removing a property from an object:

Bad:
delete state.name

Good:
{ ...state, age: undefined } (replace element with undefined, not a true removal)

OR

_.omit(state, 'age') (lodash solution)

OR

const {age, ...rest} = state

*/