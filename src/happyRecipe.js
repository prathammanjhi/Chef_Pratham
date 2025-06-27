import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function HappyRecipe(props) {
  return (
    <section className="suggested_recipe">
      <h2>📖 Here is your Recipe from our BOOK:</h2>
      <ReactMarkdown
        children={props.recipe}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        className="markdown-body"
      />
    </section>
  );
}
