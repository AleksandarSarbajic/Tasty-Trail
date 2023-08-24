import SectionItem from "./SectionItem";
export default function Section({ types }) {
  return (
    <>
      {types.types.map((item, index) => {
        return <SectionItem key={index} types={types} number={index} />;
      })}
    </>
  );
}
