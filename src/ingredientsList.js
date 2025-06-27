export default function ingredientsList(props) {
  const ingredientListItems = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <section className="items">
      <h2>Ingredient On Hand :</h2>
      <ul className="itemList">{ingredientListItems}</ul>
      {/* recipe generator box */}
      {props.ingredients.length > 3 && (
        <div className="generator" ref={props.ref}>
          <div className="content">
            <h3>Ready for a Recepie ?</h3>
            <p>Generate a recepie from the list of your items.</p>
          </div>
          <button onClick={props.getRecipe}>Generate</button>
        </div>
      )}
    </section>
  );
}
