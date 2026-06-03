import spinnerLoader from "./assets/spinner-loading.gif";
const Spinner = () => {
  return (
    <div>
      <img
        src={spinnerLoader}
        alt="Loading..."
        className="text-center mx-auto"
        width={180}
      />
    </div>
  );
};

export default Spinner;
