import { Spinner } from "@chakra-ui/spinner";

function Loader() {
  return (
    <Spinner
      width="70px"
      height="70px"
      color="#fff"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "transition(-50%, 50%)",
      }}
    />
  );
}

export default Loader