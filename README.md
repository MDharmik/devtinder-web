# DevTinder - Web

- Created a Vite + React application 
    npm create vite@latest devtinder-web -- --template react

- Remove unnecessary code and create a Hello World app
- Install Tailwind css
- Install Daisy UI
- Add Navbar component to App.jsx
- Create NavBar.jsx separate component
- Install react-router-dom
- Create BrowserRouter > Routes > Route=/ Body > RouteChildren
- Create an Outlet in your Body component
- Create a footer
- Create a Login page
- Install axios
- CORS - install cors in backend => add middleware to with configuration: origin, credentials: true;
- Whenever you are making API call using axios => { withCredentials: true }

- Install Redux Toolkit - https://redux-toolkit.js.org/tutorials/quick-start
    - configureStore => Provider - provide store in root component => create slice => add reducer to appStore

- Add redux devtools in chrome
- Login & see if your data is coming properly in chrome
- navbar should update as long as logs in
- Refactor code to add constants file + create a component folder 
- You should not be able to access other routes without login
- If token is not present, redirect user to login page.
- Logout Feature
- get the feed and add feed in the store
- build the user card on feed
- Edit user profile feature
- Show toast message on save of edited profile

