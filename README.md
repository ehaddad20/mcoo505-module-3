# Module 3 Dashboard

A small Vite + vanilla JavaScript dashboard that loads a list of users from a public API and displays a summary section plus a card for each user. It practices async/await with fetch, error handling with try/catch, ES modules, array methods (map, filter, reduce), the spread operator, destructuring, and template literals.

## Setup

```
npm install
```

## Run

```
npm run dev
```

Then open the local URL Vite prints in the terminal (usually http://localhost:5173).

## API Used

JSONPlaceholder users endpoint: https://jsonplaceholder.typicode.com/users

## Project Structure

* `index.html` page shell with the title, `#summary`, and `#users`
* `src/api.js` `getUsers()` fetches and returns the users
* `src/utils.js` `formatUser()` and `countUsers()` helpers
* `src/main.js` loads the data and renders the dashboard
* `src/style.css` styling
