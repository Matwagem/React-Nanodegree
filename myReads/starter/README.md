# myReads - your personal bookshelf
V1.0

myReads is a React Nanodegree application which explores the implementation of Hooks, State, Components, Functional Programming, and other concepts covered by the course. The app allows a user to split books between 3 different bookshelves, each representing a state (reading, read, want to read). It also features a search functionality that users can use in order to find new books, and add them to the bookshelves. Upon refresh, the state is maintained in the app.

## Installation

Use the package manager npm to install the required dependencies.

```bash
npm install
```

## Usage
To start the app, please use npm in your terminal of choice. This will open a localhost:3000 session.

```
npm start
```

## Backend Server

There are a few out of the box methods that were used as API in order to simplify development. These methods can be found in: [`BooksAPI.js`](src/BooksAPI.js) 

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)