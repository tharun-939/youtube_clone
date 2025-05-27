YouTube Clone

This is a YouTube Clone Web Application built using React, Material UI, and RapidAPI's YouTube Data API. The project demonstrates modern frontend development practices including component-based architecture, responsive design, dynamic routing, and API integration using Axios.
🚀 Features
   Search Functionality: Users can search for videos using the search bar. The app fetches related video results via RapidAPI.
   Category Filtering: A responsive sidebar with video categories. Clicking a category loads only videos related to that category.
   Responsive Design:
        On screens wider than 900px, the sidebar appears vertically.
        On narrower screens, the sidebar shifts to a horizontal layout.
    Video Playback: Uses react-player to render and play YouTube videos directly within the app.
    Routing with React Router:
        Dynamic routing is implemented to handle search results, video details, and categories.
        The app shows the home feed by default and loads specific components based on route matching.
    API Limit Handling: The app handles RapidAPI’s quota limits by loading up to 50 videos per request across all sections—home           feed, category feed, search feed, and individual video suggestions.
    Minimal CSS: Styling is handled primarily through Material UI and inline styles. Only one external CSS file is used for               certain button and element stylings.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

