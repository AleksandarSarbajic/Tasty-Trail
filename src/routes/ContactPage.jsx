import { useEffect } from "react";
import FormPart from "../components/contact/FormPart";
import TextPart from "../components/contact/TextPart";
import useDocumentTitle from "../customhooks/useDocumentTitle";

export default function ContactPage() {
  useDocumentTitle("Contact | TastyTrail");

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="contact">
      <TextPart />
      <FormPart />
    </div>
  );
}
