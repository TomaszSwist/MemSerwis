# Project created with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run project

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More about Create React App

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Features and Purpose

The project uses the React, Redux, MUI libraries. The site allows you to display and aggregate funny (or not) images called "memes" based on their scores. When the result changes, the app updates the list of images in live (depending on which page the user is on)

## Score

The result is calculated based on votes. You can vote up and down. The calculation is done by subtraction. The number of upvotes is subtracted from the downvotes.

## Store

State is menaged by Redux and "globalStore".

## Styling

Most of the styliong is provided by MUI library and some custom CSS (e.g. navigation)

## Pages

### All (Wszystkie)

This page shows all pictures. Dosen't matter what how high or low they are scored.

### Regular

This page shows pictures that are rated 5 and lower.

## Components

### Header

Upper part of the view

#### Navigation

Navigation is managed by BrowserRouter and NavLink from 'react-router-dom'. Using NavLink allows to switch views (Wszystkie, Regular, Hot) without reloading whole aplication. 

*Colors in the navigation indicates what page you are currently see (custom CSS).
*Navigation have sticy position to improve user expierience. The user always knows/see what page he is on.

### Title

Simple text with title of the aplication. Typography form MUI is used to menage styling (Card, Box, Stack, Typography, Button)

### Mem

Main section of the site. 

#### Picture

Main purpose of the site. Show picture/image. Simple "img" tag.

#### Voting

Two buttons with icons. Arrow "up" to upvote and arrow "down" to downwote.
Buttons trigger a state change (managed by Redux in globalReducer)

#### Favorite

One button with star. User can mark image as favourite by clicking on this button. Button changes its filling. 

# Area for improvement 

* Test


# Planned development of the application
