import { useNavigation } from "react-router-dom";

function useLoading() {
  const { state } = useNavigation();

  return state;
}

export { useLoading };
