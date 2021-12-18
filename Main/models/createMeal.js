const createMeal = (
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree
) => {
    return {
        id: id,
        categoryIds: categoryIds,
        title: title,
        affordability: affordability,
        complexity: complexity,
        imageUrl: imageUrl,
        duration: duration,
        ingredients: ingredients,
        steps: steps,
        isGlutenFree: isGlutenFree,
        isVegan: isVegan,
        isVegetarian: isVegetarian,
        isLactoseFree: isLactoseFree,
    }
}


export default createMeal;