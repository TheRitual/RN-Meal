import { MEALS } from "../../../assets/data/MEALS";
import { createSlice } from "@reduxjs/toolkit";

const mealsSlice = createSlice({
    name: 'meals',
    initialState: {
        meals: MEALS,
        filteredMeals: MEALS,
        favoriteMeals: [],
    },
    reducers: {
        setFilteredMeals: (state, {payload: filteredMeals}) => {
            state.filteredMeals = filteredMeals;
        },
    }
});

export const {
    setFilteredMeals,
} = mealsSlice.actions;

export const selectMealsStore = state => state.meals;
export const selectMeals = state => selectMealsStore(state).meals;
export const selectFilteredMeals = state => selectMealsStore(state).filteredMeals;
export const selectFavoriteMeals = state => selectMealsStore(state).favoriteMeals;

export default mealsSlice.reducer;