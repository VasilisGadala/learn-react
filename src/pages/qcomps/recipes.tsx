export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

function Recipe({ name, ingredients }: { name: string, ingredients: Array<string> }) {
  return (
    <div>
      <h1>{name}</h1>
      <ul>
        {ingredients.map((ingredient: string) => <li key={ingredient}>{ingredient}</li>)}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} name={recipe.name} ingredients={Array.from(recipe.ingredients)} />
      ))}
    </div>
  );
}