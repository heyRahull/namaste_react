import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <>
      <h1>Oops! Something Went Wrong</h1>
      <h2>Page dosen't exist</h2>
      <h3>{err.status + " : " + err.statusText}</h3>
    </>
  );
};

export default Error;
