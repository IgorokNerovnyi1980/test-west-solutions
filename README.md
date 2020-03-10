This is a SPA application that displays current news source https://newsapi.org.

Styles defined using styled-components
All data is stored in redux store
All functions are in the actions file (src / redux / actions.js). An exception for the Login page is the required functions are recorded in the form component.

The application consists of 4 pages:
- Home: shows the latest news here. At the top of the page is a welcome message, which varies depending on the authorization status.

- News: here in the future news will be displayed according to the preferences of an authorized user. At the top of the page is a filter block that appears if the user is authorized in the application.

- Login: form for user authorization on the site. If the user has already logged in earlier, a redirect to the profile page occurs.

- Profile: here displays current information about an authorized user. In the future, the ability to edit and personalize filters may be added. If the user is not authorized, a redirect to the login page occurs.
