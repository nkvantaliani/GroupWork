class Recipe {
    constructor(name, category, description, image, details) {
        this.name = name;
        this.category = category;
        this.description = description;
        this.image = image;
        this.details = details;
    }

    render() {
        // vkmnit htmlshi div rom shemdeg recipemanageris daxmarebit am divshi chavamatot recipebi
        const recipeDiv = document.createElement("div");
        recipeDiv.classList.add("recipe");

        // am kodit divshi vamatebt parametrebs rac unda gamovitanot
        recipeDiv.innerHTML = `
            <a href="recipe.html?name=${encodeURIComponent(this.name)}">
                <img src="${this.image}" alt="${this.name}">
                <h3>${this.name}</h3>
            </a>
            <p>${this.description}</p> 
        `;

        return recipeDiv;
    }
}


class RecipeManager {
    constructor() {
        this.recipes = [];
    }

    addRecipe(recipe) {
        this.recipes.push(recipe);
    }

    displayRecipes(category) {
        const container = document.getElementById("recipe-container");// htmlidan mogvak mtavari divi 
        if (!container) return;

        container.innerHTML = ""; 

        // iteracias vshvebit recipe-s listze da tu recipes category udris current categorys saitze gamogvak render func
        for (const recipe of this.recipes) {
            if (recipe.category === category) {
                container.appendChild(recipe.render());
            }
        };
    }
}


const recipeManager = new RecipeManager();

recipeManager.addRecipe(new Recipe(
    "Spaghetti Bolognese",
    "popular",
    "Classic Italian pasta.",
    "https://img.freepik.com/premium-photo/pasta-spaghetti-bolognese-white-plate-white-background-bolognese-sauce-is-classic-italian_763111-5976.jpg",
    `**Ingredients:**  
    - 200g spaghetti  
    - 300g minced beef  
    - 1 onion, chopped  
    - 2 cloves garlic, minced  
    - 400g canned tomatoes  
    - 1 tsp oregano  
    - Salt & pepper to taste  
    - Parmesan cheese for garnish  

    **Instructions:**  
    1. Cook spaghetti according to package instructions.  
    2. In a pan, sauté onions and garlic until fragrant.  
    3. Add minced beef and cook until browned.  
    4. Stir in canned tomatoes, oregano, salt, and pepper. Simmer for 15 minutes.  
    5. Serve over spaghetti and garnish with Parmesan cheese.`
));

recipeManager.addRecipe(new Recipe(
    "Vegan Buddha Bowl",
    "vegan",
    "Healthy mix of quinoa & vegetables.",
    "https://img.freepik.com/premium-photo/fresh-vegan-buddha-bowl-white-background_711700-17766.jpg",
    `**Ingredients:**  
    - 1 cup cooked quinoa  
    - ½ avocado, sliced  
    - 1 cup chickpeas  
    - ½ cup cherry tomatoes, halved  
    - 1 carrot, shredded  
    - 1 tbsp tahini dressing  

    **Instructions:**  
    1. Cook quinoa and let it cool.  
    2. Arrange all ingredients in a bowl.  
    3. Drizzle with tahini dressing and enjoy!`
));

recipeManager.addRecipe(new Recipe(
    "Chocolate Cake",
    "dessert",
    "Rich and moist chocolate cake.",
    "https://t3.ftcdn.net/jpg/02/47/99/82/360_F_247998260_qlTy01gLfUzaRIIJE9mUDOBtPQBw6Y8n.jpg",
    `**Ingredients:**  
    - 200g all-purpose flour  
    - 100g cocoa powder  
    - 1 tsp baking powder  
    - 200g sugar  
    - 2 eggs  
    - 1 cup milk  
    - 1/2 cup vegetable oil  

    **Instructions:**  
    1. Preheat oven to 180°C (350°F).  
    2. Mix dry ingredients in a bowl.  
    3. Add eggs, milk, and oil, and mix well.  
    4. Pour into a greased baking pan.  
    5. Bake for 30-35 minutes.  
    6. Let it cool before serving.`
));
recipeManager.addRecipe(new Recipe(
    "Grilled Chicken Salad",
    "diet",
    "A healthy and protein-packed salad.",
    "https://media.istockphoto.com/id/1286095649/photo/caesar-salad-with-chicken.jpg?s=612x612&w=0&k=20&c=urAUdLQaCZOdI8IiPJmvJsipKtn4wCQKWAasqFjBqqw=",
    `**Ingredients:**  
    - 1 grilled chicken breast, sliced  
    - 2 cups mixed greens  
    - ½ cucumber, sliced  
    - ½ cup cherry tomatoes, halved  
    - ¼ red onion, thinly sliced  
    - 2 tbsp balsamic dressing  

    **Instructions:**  
    1. Grill the chicken breast and let it rest before slicing.  
    2. Toss all salad ingredients in a bowl.  
    3. Drizzle with balsamic dressing and serve.`
));

recipeManager.addRecipe(new Recipe(
    "Vegan Lentil Soup",
    "vegan",
    "A hearty and nutritious lentil soup.",
    "https://img.freepik.com/free-photo/lentil-soup-with-vegetables-bowl-isolated-white-background_123827-31941.jpg",
    `**Ingredients:**  
    - 1 cup dried lentils  
    - 1 onion, chopped  
    - 2 carrots, diced  
    - 2 cloves garlic, minced  
    - 4 cups vegetable broth  
    - 1 tsp cumin  
    - Salt & pepper to taste  

    **Instructions:**  
    1. Sauté onions, carrots, and garlic in a pot.  
    2. Add lentils, vegetable broth, cumin, salt, and pepper.  
    3. Simmer for 25-30 minutes until lentils are tender.  
    4. Serve warm and enjoy!`
));

recipeManager.addRecipe(new Recipe(
    "Strawberry Cheesecake",
    "dessert",
    "Creamy and delicious strawberry cheesecake.",
    "https://img.freepik.com/premium-photo/piece-cheesecake-with-fresh-strawberries-mint-isolated-white-background_183587-426.jpg",
    `**Ingredients:**  
    - 200g graham cracker crumbs  
    - 100g melted butter  
    - 300g cream cheese  
    - 100g sugar  
    - 1 tsp vanilla extract  
    - 1 cup fresh strawberries, sliced  

    **Instructions:**  
    1. Mix graham cracker crumbs with melted butter and press into a pan.  
    2. Beat cream cheese, sugar, and vanilla until smooth.  
    3. Spread over the crust and refrigerate for at least 4 hours.  
    4. Top with fresh strawberries before serving.`
));
recipeManager.addRecipe(new Recipe(
    "Garlic Butter Salmon",
    "diet",
    "A flavorful and healthy salmon dish.",
    "https://static.vecteezy.com/system/resources/previews/047/758/807/non_2x/baked-salmon-with-garlic-and-herbs-on-a-white-plate-isolated-on-a-transparent-background-free-png.png",
    `**Ingredients:**  
    - 2 salmon fillets  
    - 2 tbsp butter, melted  
    - 2 cloves garlic, minced  
    - 1 tsp lemon juice  
    - Salt & pepper to taste  

    **Instructions:**  
    1. Preheat oven to 200°C (400°F).  
    2. Place salmon on a baking sheet.  
    3. Mix melted butter, garlic, and lemon juice, then brush over salmon.  
    4. Bake for 12-15 minutes.  
    5. Serve hot with your favorite vegetables.`
));

recipeManager.addRecipe(new Recipe(
    "Mushroom Risotto",
    "popular",
    "Creamy and savory Italian risotto.",
    "https://img.freepik.com/premium-photo/risotto-with-mushrooms-isolated-white-background_185193-73410.jpg",
    `**Ingredients:**  
    - 1 cup Arborio rice  
    - 2 cups vegetable broth  
    - 1 cup mushrooms, sliced  
    - 1 onion, chopped  
    - 2 cloves garlic, minced  
    - ½ cup Parmesan cheese  

    **Instructions:**  
    1. Sauté onions, garlic, and mushrooms in a pan.  
    2. Add Arborio rice and stir for 2 minutes.  
    3. Gradually add vegetable broth, stirring constantly.  
    4. Cook until creamy and rice is tender.  
    5. Stir in Parmesan cheese before serving.`
));

recipeManager.addRecipe(new Recipe(
    "Avocado Toast",
    "vegan",
    "Simple and delicious avocado toast.",
    "https://img.freepik.com/premium-photo/avocado-toast-white-plate-white-background_864588-11016.jpg",
    `**Ingredients:**  
    - 2 slices whole-grain bread  
    - 1 ripe avocado  
    - 1 tsp lemon juice  
    - ½ tsp chili flakes  
    - Salt & pepper to taste  

    **Instructions:**  
    1. Toast the bread slices until golden.  
    2. Mash the avocado with lemon juice, salt, and pepper.  
    3. Spread over toasted bread and sprinkle with chili flakes.  
    4. Enjoy immediately!`
));

recipeManager.addRecipe(new Recipe(
    "Berry Smoothie Bowl",
    "dessert",
    "A refreshing and nutritious smoothie bowl.",
    "https://media.istockphoto.com/id/513747656/photo/breakfast-smoothie-bowl.jpg?s=612x612&w=0&k=20&c=tiUEkmlkuSommLS6QuBzn-0CmNmWGGZiEPWOx0MM6po=",
    `**Ingredients:**  
    - 1 banana  
    - ½ cup frozen berries  
    - ½ cup almond milk  
    - 1 tbsp honey  
    - Granola and fresh fruit for topping  

    **Instructions:**  
    1. Blend banana, frozen berries, almond milk, and honey until smooth.  
    2. Pour into a bowl and top with granola and fresh fruit.  
    3. Serve immediately and enjoy!`
));
recipeManager.addRecipe(new Recipe(
    "Grilled Steak with Chimichurri",
    "popular",
    "Juicy steak with a flavorful chimichurri sauce.",
    "https://files.oaiusercontent.com/file-Cv237etaWJKgY7fzkB92Ye?se=2025-02-17T23%3A21%3A13Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D88644188-3164-474e-acf3-31f1f6b6a5b0.webp&sig=kBeIOeRBgXUplJM0KSdfpmunwCj%2BPbOeGxjpwiepXMI%3D",
    `**Ingredients:**  
    - 1 beef steak (sirloin or ribeye)  
    - 2 tbsp olive oil  
    - Salt & pepper to taste  

    **For Chimichurri:**  
    - ½ cup fresh parsley, chopped  
    - 2 cloves garlic, minced  
    - 2 tbsp red wine vinegar  
    - 3 tbsp olive oil  
    - ½ tsp red pepper flakes  

    **Instructions:**  
    1. Season steak with salt, pepper, and olive oil.  
    2. Grill over medium-high heat for 3-4 minutes per side.  
    3. Mix chimichurri ingredients in a bowl.  
    4. Let steak rest for 5 minutes, then slice and serve with chimichurri sauce.`
));

recipeManager.addRecipe(new Recipe(
    "Quinoa & Black Bean Salad",
    "diet",
    "A protein-packed, refreshing salad.",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOa8KRTShvJCzTKC2OE7Ezn1CZrhiQqNi2hQ&s",
    `**Ingredients:**  
    - 1 cup cooked quinoa  
    - ½ cup black beans  
    - ½ cup corn kernels  
    - ½ bell pepper, diced  
    - ¼ cup red onion, chopped  
    - 2 tbsp lime juice  
    - 1 tbsp olive oil  
    - Salt & pepper to taste  

    **Instructions:**  
    1. Mix quinoa, black beans, corn, bell pepper, and onion in a bowl.  
    2. Drizzle with lime juice and olive oil.  
    3. Season with salt and pepper, toss well, and serve.`
));

recipeManager.addRecipe(new Recipe(
    "Stuffed Bell Peppers",
    "vegan",
    "Delicious bell peppers stuffed with rice and veggies.",
    "https://thumbs.dreamstime.com/b/baked-cheese-stuffed-bell-peppers-beans-corn-rice-vegetables-isolated-white-background-colorful-whith-casserole-156020558.jpg",
    `**Ingredients:**  
    - 3 bell peppers (any color)  
    - 1 cup cooked rice  
    - ½ cup black beans  
    - ½ cup diced tomatoes  
    - ½ tsp cumin  
    - ½ tsp paprika  
    - Salt & pepper to taste  

    **Instructions:**  
    1. Preheat oven to 180°C (350°F).  
    2. Cut the tops off the bell peppers and remove seeds.  
    3. Mix rice, beans, tomatoes, and spices in a bowl.  
    4. Stuff the mixture into the bell peppers and bake for 20 minutes.  
    5. Serve warm and enjoy!`
));

recipeManager.addRecipe(new Recipe(
    "Lemon Drizzle Cake",
    "dessert",
    "A moist and tangy lemon-flavored cake.",
    "https://img.freepik.com/premium-photo/lemon-drizzle-cake-isolated-solid-white-background_1079150-126451.jpg",
    `**Ingredients:**  
    - 200g all-purpose flour  
    - 150g sugar  
    - 2 eggs  
    - ½ cup butter, melted  
    - 1 tsp baking powder  
    - Juice and zest of 1 lemon  

    **For Drizzle:**  
    - ¼ cup powdered sugar  
    - 2 tbsp lemon juice  

    **Instructions:**  
    1. Preheat oven to 180°C (350°F).  
    2. Mix flour, sugar, and baking powder in a bowl.  
    3. Add eggs, butter, lemon juice, and zest, then mix well.  
    4. Pour into a greased pan and bake for 30 minutes.  
    5. Mix drizzle ingredients and pour over cake while warm.  
    6. Let cool, then serve.`
));
recipeManager.addRecipe(new Recipe(
    "Honey Garlic Shrimp",
    "popular",
    "Quick and flavorful shrimp dish.",
    "https://img.freepik.com/premium-photo/garlic-shrimp-isolated-white-transparent-background-closeup-garlic-shrimp-white-plate-traditional-spanish-dish-side-view_858934-1369.jpg",
    `**Ingredients:**  
    - 250g shrimp, peeled and deveined  
    - 2 tbsp soy sauce  
    - 2 tbsp honey  
    - 2 cloves garlic, minced  
    - 1 tbsp olive oil  

    **Instructions:**  
    1. In a bowl, mix soy sauce, honey, and garlic.  
    2. Heat olive oil in a pan and cook shrimp for 2 minutes per side.  
    3. Pour sauce over shrimp and cook for another minute.  
    4. Serve hot with rice or vegetables.`
));

recipeManager.addRecipe(new Recipe(
    "Mediterranean Chickpea Salad",
    "diet",
    "A refreshing and protein-packed salad.",
    "https://files.oaiusercontent.com/file-GAaJ19ZEUyKnrHozbNd11o?se=2025-02-17T23%3A27%3A06Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dea99271b-f702-453c-bb64-6231c64f455b.webp&sig=wL7dXudhluLEZb6e4DIGyR2Wv08mhA1GnFsvDwpXOdo%3D",
    `**Ingredients:**  
    - 1 can chickpeas, drained  
    - ½ cucumber, diced  
    - ½ cup cherry tomatoes, halved  
    - ¼ red onion, finely chopped  
    - 2 tbsp feta cheese (optional)  
    - 2 tbsp olive oil  
    - 1 tbsp lemon juice  
    - 1 tsp oregano  

    **Instructions:**  
    1. Combine all ingredients in a bowl.  
    2. Drizzle with olive oil and lemon juice.  
    3. Mix well and serve immediately.`
));

recipeManager.addRecipe(new Recipe(
    "Sweet Potato & Black Bean Tacos",
    "vegan",
    "A delicious plant-based taco option.",
    "https://moremomma.com/wp-content/uploads/2020/11/25-26494-post/6BA5FC11-9276-4A77-B1D1-D48FE0C8EF0F-735x919.jpg",
    `**Ingredients:**  
    - 2 medium sweet potatoes, diced  
    - 1 can black beans, drained  
    - 1 tsp cumin  
    - 1 tsp chili powder  
    - 4 small tortillas  
    - 1 avocado, sliced  
    - Salsa for topping  

    **Instructions:**  
    1. Roast sweet potatoes at 200°C (400°F) for 20 minutes.  
    2. Heat black beans with cumin and chili powder.  
    3. Assemble tacos with sweet potatoes, black beans, and avocado.  
    4. Top with salsa and serve.`
));

recipeManager.addRecipe(new Recipe(
    "Peanut Butter Brownies",
    "dessert",
    "Rich and fudgy peanut butter brownies.",
    "https://www.vermontbrownie.com/cdn/shop/files/PBNew_1024x1024.jpg?v=1736871265",
    `**Ingredients:**  
    - 100g butter, melted  
    - 200g sugar  
    - 2 eggs  
    - 100g cocoa powder  
    - 100g all-purpose flour  
    - ½ cup peanut butter  

    **Instructions:**  
    1. Preheat oven to 180°C (350°F).  
    2. Mix melted butter, sugar, and eggs in a bowl.  
    3. Stir in cocoa powder and flour until combined.  
    4. Pour batter into a greased baking pan and swirl in peanut butter.  
    5. Bake for 25 minutes and let cool before serving.`
));


// vnaxulobt ra page unda chavtvirtot da magis mixedvit chavtvirtot is page
document.addEventListener("DOMContentLoaded", () => {
    const pageTitle = document.title.toLowerCase();

    if (pageTitle.includes("popular")) {
        recipeManager.displayRecipes("popular");
    } else if (pageTitle.includes("vegan")) {
        recipeManager.displayRecipes("vegan");
    } else if (pageTitle.includes("diet")) {
        recipeManager.displayRecipes("diet");
    } else if (pageTitle.includes("dessert")) {
        recipeManager.displayRecipes("dessert");
    }
});
