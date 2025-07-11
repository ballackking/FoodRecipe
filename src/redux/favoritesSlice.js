import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
   toggleFavorite: (state, action) => {
      const article = action.payload; // Expecting the entire article object
      let idFood = "";
      const existingIndex = state.favoriterecipes.findIndex(
        (item) => {
          idFood = item.idFood; // Assuming articles have an 'idFood' property
          console.log("item.idFood:", item.idFood, "article.idFood:", article.idFood);
          return item.idFood === article.idFood // Compare idFood with idFood
        }
      );
      let favourite = false;
      if (existingIndex >= 0) {
        favourite = false
        state.favoriterecipes.splice(existingIndex, 1); // Remove from favorites
      } else {
        state.favoriterecipes.push(article); // Add to favorites
        favourite = true
      }
      
      console.log(`Updated favoriterecipes: item=${idFood}, favourite=${favourite}, ${existingIndex}`);
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;

  