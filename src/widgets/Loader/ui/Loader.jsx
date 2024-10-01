import { Spinner } from "@chakra-ui/spinner";

export default function Loader() {
  return (
    <Spinner
      width="70px"
      height="70px"
      color="#000"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "transition(-50%, 50%)",
      }}
    />
  );
}
