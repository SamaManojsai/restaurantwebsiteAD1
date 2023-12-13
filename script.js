document.getElementById('ingredient-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const ingredients = [...document.getElementsByName('ingredient')].filter(input => input.checked);
    const ingredientList = ingredients.map(ingredient => ingredient.value).join(', ');

    if (ingredients.length > 0) {
        const chefStatus = document.getElementById('chef-status');
        chefStatus.innerHTML = 'Chef is preparing your custom pizza with ingredients: ' + ingredientList;
    } else {
        alert('Please select at least one ingredient');
    }
});