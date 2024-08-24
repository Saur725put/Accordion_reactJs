import Accordion from "./accordion";
import data from "../data.json";

export default function AllComponent() {
  return (
    <div>
      <h1>FA'Q</h1>
      {data.faqs.map((obj, index) => {
        return <Accordion qna={obj} />;
      })}
    </div>
  );
}
