import { useEffect } from "react";

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;

    return () => {
      document.title = "Tasty Trail";
    };
  }, [title]);
}

export default useDocumentTitle;
