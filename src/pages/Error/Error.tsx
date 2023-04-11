import { Link, useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const error: any = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="bg-[#313B49] h-screen">
      <div className="pt-[1px]">
        <div className="flex justify-center items-center text-[50px] text-[#999999] mt-[150px]">
          Uh oh! We’ve got a problem.
        </div>
        <p className="mt-[50px] text-center text-[24px]">
          {error.message || error.statusText}
        </p>
        <div className="flex justify-center items-center gap-[50px] text-[20px] text-[#806e6e] mt-[150px]">
          <button
            className="flex justify-center items-center hover:scale-[1.07] transition duration-300"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
          <Link
            to="/"
            className="flex justify-center items-center hover:scale-[1.07] transition duration-300"
          >
            <span>Go home</span>
          </Link>
        </div>
      </div>
      {/* <p>{error.message || error.statusText}</p>
      <div className="flex-md">
        <button className="btn btn--dark" onClick={() => navigate(-1)}>
          <span>Go Back</span>
        </button>
        <Link to="/" className="btn btn--dark">
          <span>Go home</span>
        </Link>
      </div> */}
    </div>
  );
};

export default Error;
