# Todo using Redux
## Todo list with authentication and authorization in React using Redux connected with express

## User Stories

- Signup: As an anon, I can sign up on the platform so that I can start writing the to-do list.
- Login: As a user, I can log in to the app so that I can see my todos.
- Logout: As a user, I can log out from the todo so no one else can use it.
- Add Todo As a user I can add a to-do item to my list.
- See All Todos As a user, you can see all your todos.
- Update Todo As a user I can update a to-do item from my list.
- Delete Todo As a user I can delete a to-do item from my list.


###### Redux
```
Redux is a pattern and library for managing and 
updating application state, using events called "actions". 
It serves as a centralized store for a state that needs to be 
used across your entire application, with rules ensuring 
that the state can only be updated in a predictable fashion.
```

## Get Start:
###### Start React
```
npx create-react-app my-app
cd my-app
npm start
```

###### Start Redux
> install
```
npm i redux
npm i react-redux
npm i redux-devtools-extension
```

> Reducers
  1. index.js
  2. task.js
  3. login.js

> should start by wrapping your entire application in a <Provider> component to make the store available throughout the component tree.

```
const store = createStore(rootReducer)

<Provider store={store}> </Provider>
```

> useDispatch
```
The equivalent of map dispatch to props is useDispatch. 
We will invoke useDispatch and store it to a variable, dispatch. 
Dispatch will work with all actions imported from the actions folder. 
```
  
> useSelector
```
useSelector is a function that takes the current state as an argument 
and returns whatever data you want from it and it allows you to store 
the return values inside a variable within the scope of 
you functional components instead of passing down as props
```


###### Components
- Register
- Login
- Todos
