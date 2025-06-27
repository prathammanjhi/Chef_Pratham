import ReactMarkdown from "react-markdown";

export default function happyRecipe(props) {
  return (
    <section className="suggested_recipe">
      <h2>Here is your Recipe from our BOOK:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}
