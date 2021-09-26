# TodoApp -->

To sync up schema with Heroku database run: 

NEED SCRIPTS TO AUTOMATE
  prisma migrate
  node prisma/seed.js

workaround so far
- npx prisma db push --preview-feature --force 
- notes
  - need to setup postgreSQL database URI as env variable to connect.

Apollo manages state and utilizes a cache
  will bypass Apollo cache usage and utilize Redux
  store data essentially as duplicate in Redux to utilize redux state management.

# RESPONSES from graphql-express backend
MUTATIONS
  Login
    Todos
  Signup
    Todos = null (will display empty to user)
  Add - todo
  Delete - todo
  Update - todo
QUERYS
  Session
    User - gets active user from token

- Responses get recieved on front end and passed through Redux data pipeline where jwt token cookie gets set. 
- On redux rerender, the auth session is checked against cookies and logs in accordingly to display the user's data.

-once you edit data on each todo the database keeps track of that as a newer record and changes the order of rendered Todos.


TESTS
- notes for future project structuring:
- All error handling logic such in Signup or any logic trhat can be extracted should be seperated into pure functions for testing purposes
- Testing with hooks skips implementation details and tests just the behavior

UNIT TESTING internal components
INTEGRATION TESTING external library functionality

complete:
  TodoInterface
  Greeting
  LoadingSpinnerUX

AUTH:
  Login
  Signup
  Logout

  Header
    Add
    Delete
    Header

Redux:
  Actions
    activeActions
    authActions
    userTodoActions
  Reducers
    active
    Auth
    Todos

  SaveStatus

    NoTasks

    TodoList

18 complete

incomplete:
CORE:


    TodoDetails
    Todo


2 tests need completed