import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);

  return (
    <div className="Error-handle">
    <h1>Oops !!! </h1>
    <h2> Something Went wrong </h2>
    <h3> {err.status} : {err.statusText} </h3>
    </div>
  )
}

export default Error;