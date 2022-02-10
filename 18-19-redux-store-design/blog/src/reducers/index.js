import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

// When redux first boots up its going to call the 
// reducers one time (during intialization).

export default combineReducers({
  posts: postsReducer
});

// Rules of Reducers

// 1. Must return any value besides 'undefined'. Cannot be undefined during initilization or any other time.
// 2. Must produces 'state', or data to be used inside of an app using only previous state and the action object.
// 3. Must not reach 'out of itself' to decide what value to return (reducers are pure).
// Example: 
/*
  export default (state, action) => {
    // Bad!
    return document.querySelector('input');

    // Bad!
    return axios.get('/posts')

    // Good!
    return state + action
  };
*/

// 4. Must not mutate its input 'state' argument (possibly misleading!)
// Technically you can, but it is convention to not. There are some scenerios 
// in which this would cause unexpected behavior in the application and is best
// to simply never mutate state in a reducer.

/*
When a reducer gets an array or object passed in as state, the state is a reference to the array or object. If you return that state, you're returning a reference to the same object - so even if you've changed a property or value on the state, it's still the same array/object.

This check of:

nextStateForKey !== previousStateForKey

Checks the reference aka address in memory of the objects.

An analogy:

Let's call the 'State' object a house. We will say the house is at address: 100 Mansions Street.

In redux, when we create the reducer, and we decide to mutate the state - what we're doing is manipulating/ changing the object properties. In the house analogy, we would be remodeling the inside of the house. Now, although we made changes to the inside of the house, the address is still 100 Mansions Street, no matter if we add rooms or throw things out, doesn't matter - the address is the same.

The equality check in the code above that Stephen pointed out in the Redux documentation, says that all it does is check the object's address, not if it's been mutated or changed. Now, that's a problem because if we do change the state in the reducer, we want the application to know, and re-render, but it won't because the check only catches if it's a change in memory, aka a different object, or a house with a different address.

And because so many of us are beginners, we won't know that it won't re-render and we have to do that manually if we change the state in the reducer, so it's easier to say 'No don't manipulate state here because it wont do what you want it to' than to explain all that.   

So the equality check, verifies the reference in memory, not the contents of the reference.
Hope this helps.
*/