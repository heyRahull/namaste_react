61. what is createHashRouter, createMemoryRouter
    createHashRouter: createHashRouter is a legacy routing solution that uses the hash portion of the URL to maintain client-side routing. It's suitable for environments where configuring server-side routing is not possible or when targeting older browsers that don't support HTML5 history API.
    createMemoryRouter: createMemoryRouter is a router implementation that doesn't interact with the browser's URL. It's useful for scenarios like server-side rendering (SSR), testing, or non-browser environments where a URL doesn't exist.
62. What is the order of life cycle method calls in Class Based Components?
    The order of lifecycle method calls in class-based components is as follows:

constructor()
static getDerivedStateFromProps()
render()
componentDidMount()
shouldComponentUpdate()
getSnapshotBeforeUpdate()
componentDidUpdate()
componentWillUnmount() 63. Why do we use componentDidMount?
componentDidMount() is a lifecycle method in React class components that is called immediately after a component is mounted (inserted into the DOM). It's commonly used for tasks like data fetching, setting up subscriptions, or initializing third-party libraries that require access to the DOM. This method is ideal for performing side effects that need to happen only once after the initial render.

64. Why do we use componentWillUnmount? Show with example.
    componentWillUnmount() is a lifecycle method in React class components that is called immediately before a component is unmounted (removed from the DOM). It's used to perform cleanup tasks such as canceling timers, clearing intervals, or unsubscribing from external subscriptions to prevent memory leaks or stale data. Here's an example:
    `
    class Timer extends React.Component {
    intervalId;

componentDidMount() {
this.intervalId = setInterval(() => {
console.log('Tick');
}, 1000);
}

componentWillUnmount() {
clearInterval(this.intervalId);
}

render() {
return <div>Timer component</div>;
}
}`
In this example, componentWillUnmount() is used to clear the interval set in componentDidMount() to prevent the timer from continuing to run after the component is unmounted.
