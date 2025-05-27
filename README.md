
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Youtube Clone

This is a YouTube Clone Web Application built using React, Material UI, and RapidAPI's YouTube Data API. The project demonstrates modern frontend development practices including component-based architecture, responsive design, dynamic routing, and API integration using Axios.


## 🚀 Features
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



