import { useNavigation } from "react-router-dom";

function useLoading() {
  const { state } = useNavigation();
  console.log(state);
  return state;
}

export { useLoading };
