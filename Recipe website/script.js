// Recipe Class
class Recipe {
    constructor(name, category, description, image) {
        this.name = name;
        this.category = category; 
        this.description = description;
        this.image = image;
    }

    render() {
        const recipeDiv = document.createElement("div");
        recipeDiv.classList.add("recipe");
    
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

// Recipe Manager
class RecipeManager {
    constructor() {
        this.recipes = [];
    }

    addRecipe(recipe) {
        this.recipes.push(recipe);
    }

    displayRecipes(category) {
        const container = document.getElementById("recipe-container");
        if (!container) return;

        container.innerHTML = ""; // Clear previous content

        this.recipes
            .filter(recipe => recipe.category === category)
            .forEach(recipe => {
                container.appendChild(recipe.render());
            });
    }
}

// Initialize Recipe Manager
const recipeManager = new RecipeManager();

// Add Sample Recipes
recipeManager.addRecipe(new Recipe("Spaghetti Bolognese", "popular", "Classic Italian pasta.", "https://source.unsplash.com/200x150/?spaghetti"));
recipeManager.addRecipe(new Recipe("Vegan Buddha Bowl", "vegan", "Healthy mix of quinoa & vegetables.", "https://source.unsplash.com/200x150/?vegan"));
recipeManager.addRecipe(new Recipe("Keto Avocado Salad", "diet", "Low-carb salad with avocado & eggs.", "https://source.unsplash.com/200x150/?salad"));
recipeManager.addRecipe(new Recipe("Chocolate Cake", "dessert", "Rich and moist chocolate cake.", "https://source.unsplash.com/200x150/?chocolatecake"));
recipeManager.addRecipe(new Recipe("Grilled Salmon", "popular", "Tasty grilled salmon with lemon.", "https://source.unsplash.com/200x150/?salmon"));
recipeManager.addRecipe(new Recipe("Vegan Tacos", "vegan", "Tasty tacos filled with beans & avocado.", "https://source.unsplash.com/200x150/?tacos"));
recipeManager.addRecipe(new Recipe("Green Smoothie", "diet", "A healthy mix of spinach, banana & protein.", "https://source.unsplash.com/200x150/?smoothie"));
recipeManager.addRecipe(new Recipe("Apple Pie", "dessert", "Classic homemade apple pie.", "https://source.unsplash.com/200x150/?applepie"));

// Load Recipes Based on Page
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

