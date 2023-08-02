import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    category: "Men",
    items: ["Coats", "Jackets", "Party Wear", "Boots"],
  },
  {
    category: "Women",
    items: ["Coats", "Jackets", "Party Wear", "Boots"],
  },
  {
    category: "Kids",
    items: ["Coats", "Jackets", "Party Wear", "Boots"],
  },
];
const accordionSlice = createSlice({
  name: "AccordionSlice",
  initialState,
});
export default accordionSlice;
