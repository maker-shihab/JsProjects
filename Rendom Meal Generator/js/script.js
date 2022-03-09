const getMealBtn = document.getElementById('get-meal');
const mealContainer = document.getElementById('meal');
getMealBtn.addEventListener('click', () => {
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data => {
      creatMeal(data.meals[0])
    });
});

function creatMeal(meal){
  const ingredients = [];
  for(i=1; i<=20; i++){
    if(meal[`strIngredient${i}`]){
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      )}
      else{
      break;
    }
  };

  mealContainer.innerHTML =`
  <div class='row mt-6'>
    <div class='meal-item'>
      <h2 class='meal-title text-3xl font-bold pb-4'>${meal.strMeal}</h2>
      <img src="${meal.strMealThumb}" alt='Meal Thumb' />
      <p class='mt-4'><strong>Category: </strong>${meal.strCategory}</p>
      <p><strong>Tags: </strong>${meal.strTags.split(' ').join('-')}</p>
      <h4>Ingredients</h4>
      <ul>
        ${ingredients.map(ingredient => 
          `<li>${ingredient}</li>`
          ).join(' ')}
      </ul>


      <p class='meal-pragrap py-4'>${meal.strInstructions}</p>
    </div>
  </div>
  `;
}
