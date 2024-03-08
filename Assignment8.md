45. What is a Microservice?
    A microservice is a software architectural style that structures an application as a collection of small, loosely coupled, and independently deployable services. Each service is responsible for a specific business function and communicates with other services through well-defined APIs. Microservices promote scalability, agility, and maintainability by allowing teams to develop, deploy, and update services independently.

46. What is Monolith architecture?
    Monolith architecture is a traditional software architectural style where all components of an application are tightly coupled and run as a single, self-contained unit. In a monolith, all functionalities, such as user interface, business logic, and data access, are bundled together within a single codebase and deployed as a single artifact.

47. Difference between Monolith and Microservice.
    Architecture: Monolith architecture consists of a single, integrated application, whereas microservices architecture consists of multiple independent services.
    Decomposition: Monoliths are typically large and have tightly coupled components, while microservices are smaller, modular, and loosely coupled.
    Deployment: Monoliths are deployed as a single unit, while microservices are deployed independently, allowing for more flexible deployment strategies.
    Scalability: Monoliths scale by replicating the entire application, while microservices scale individual services based on demand.
48. Why do we need a useEffect Hook?
    The useEffect Hook in React is used to perform side effects in functional components. Side effects may include data fetching, subscriptions, or manually changing the DOM. useEffect is essential for managing component lifecycle events, such as component mounting, updating, and unmounting, in functional components.

49. What is Optional Chaining?
    Optional chaining, introduced in ECMAScript 2020, is a feature that simplifies the process of accessing properties and methods of nested objects or arrays when intermediate properties may be null or undefined.

The optional chaining operator (?.) allows you to access properties or methods without the need for explicit null or undefined checks. If any intermediate property in the chain is null or undefined, the expression short-circuits, and the result is set to undefined.

50. What is Shimmer UI?
    Shimmer UI is a user interface design technique used to indicate that content is loading or in progress. It involves displaying animated placeholder elements that mimic the appearance of content being loaded, providing users with visual feedback and reducing perceived load times.

51. Difference between JS expression and JS statement.
    Expression: An expression in JavaScript is any valid unit of code that produces a value. Examples include literals, variables, function calls, and arithmetic operations. Expressions can be used anywhere a value is expected, such as assignments, function arguments, or return statements.
    Statement: A statement in JavaScript is a complete instruction that performs an action. Examples include variable declarations, control flow statements (if, for, while), and function declarations. Statements do not necessarily produce a value but instead execute a specific operation.
52. What is CORS?
    CORS (Cross-Origin Resource Sharing) is a security mechanism that allows web browsers to make cross-origin HTTP requests safely. It enables servers to specify which origins are allowed to access their resources and which HTTP methods are permitted. CORS helps prevent unauthorized access to sensitive data and resources by enforcing same-origin policy restrictions.

53. What is async and await?
    async and await are keywords introduced in ECMAScript 2017 (ES8) for asynchronous programming in JavaScript. They provide a more concise and readable way to work with asynchronous code compared to traditional callback functions or promises. async is used to define an asynchronous function, while await is used to pause the execution of an async function until a promise is resolved or rejected, allowing for sequential and more readable code flow.

54. What is the use of const json = await data.json(); ?
    await data.json() is used to asynchronously parse the JSON response from a fetch request (data) into a JavaScript object (json). This line of code waits for the data.json() promise to resolve, then assigns the parsed JSON data to the json constant. This is commonly used when fetching data from an API to convert the response body into a usable format.
