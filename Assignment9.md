55. What is Conditional Rendering, explain with a code example?
    Conditional rendering in React involves dynamically rendering components or content based on certain conditions. Here’s an example to illustrate conditional rendering:

function App() {
const isLoggedIn = true;
return (
<div>
{isLoggedIn ? <WelcomeMessage /> : <LoginButton />}
</div>
);
} 56. What are various ways to add images into our App? Explain with code examples
Importing images directly: You can import images directly into your JavaScript or JSX files using import statements. For example:
import React from 'react';
import logo from './logo.png';

function App() {
return <img src={logo} alt="Logo" />;
}

export default App;
Using public folder: You can place your images in the public folder of your React app and reference them using relative paths. For example:
function App() {
return <img src="/images/logo.png" alt="Logo" />;
}
Using CSS: You can use CSS to set the background image or apply images as background using the url() function. For example:
.logo {
background-image: url('/images/logo.png');
}
function App() {
return <div className="logo"></div>;
} 57. What would happen if we do console.log(useState())?
If you call console.log(useState()), it will log an array containing the state value and the state setter function. However, this approach is not recommended because it logs the initial state value, and subsequent updates to the state will not be reflected in the console. It's better to use console.log inside the component body to observe state changes during component re-renders.

58. How will useEffect behave if we don’t add a dependency array?
    If you don’t add a dependency array to the useEffect hook, it will run on every render cycle of the component, including the initial render and subsequent re-renders. This can lead to performance issues and unnecessary side effects, especially if the effect doesn't depend on any variables or props. It's important to specify dependencies to control when the effect should be executed.

59. What is SPA?
    SPA stands for Single Page Application. It is a web application or website that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server. SPAs use AJAX and HTML5 to update the content of the page without requiring a full page reload, providing a more seamless and responsive user experience.

60. Difference between Client Side Routing and Server Side Routing
    Client Side Routing: In client-side routing, navigation and routing logic are handled by the client-side JavaScript code running in the web browser. When a user clicks on a link or navigates within the application, the client-side router updates the URL and renders the appropriate components without making a request to the server. Examples include React Router and Vue Router.
    Server Side Routing: In server-side routing, navigation and routing logic are handled by the server. When a user clicks on a link or navigates within the application, the browser sends a request to the server, which responds with the appropriate HTML page. Each navigation action triggers a new request to the server. Examples include traditional server-rendered web applications using frameworks like Express.js or Django.
