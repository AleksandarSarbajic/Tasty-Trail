import { useEffect } from "react";

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;

    return () => {
      document.title = "Tasty Trail | Find the best food!";
    };
  }, [title]);
}

export default useDocumentTitle;
