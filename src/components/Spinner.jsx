import spinnerLoader from "../assest/svg/spinnerLoader.svg";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center fixed right-0 left-0 bottom-0 top-0">
      <div>
        <img src={spinnerLoader} alt="Loading..." className="h-40" />
      </div>
    </div>
  );
}
