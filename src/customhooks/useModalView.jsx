import { useState } from "react";
export default function useModalView() {
  const [showModal, setShowModal] = useState(false);
  function modalHandler() {
    setShowModal(!showModal);
  }
  return [showModal, modalHandler];
}
