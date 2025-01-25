import { createSlice, nanoid } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const initialState = {
  users: [], 
  isAuthenticated: Boolean(Cookies.get("token")), 
  error : ''
};


const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SignUpUser: {
      reducer(state, action) {
        state.users.push(action.payload);       
      },
      prepare(userData) {
       
        return {
          payload: {
            id: nanoid(),
            token: nanoid(),
            ...userData,
          },
        };
      },
    },  
    SignInUser: {
      reducer(state, action) {
        const user = state.users.find(
          (user) =>
            user.username === action.payload.username &&
            user.password === action.payload.password
        );
    
        if (user) {
          // Mark as authenticated and set a token
          state.isAuthenticated = true;
          Cookies.set("token", user.token); // Use the user's token set during sign-up
          state.error = null; // Clear any previous errors
        } else {
          // Set an error message in the state
          state.isAuthenticated = false;
          state.error = "Invalid username or password";
        }
      },
      prepare(userData) {
        return { payload: { ...userData } };
      },
    },
    

    logout(state) {
      Cookies.remove("token"); 
      state.isAuthenticated = false; 
    },
  },
});

// Action creators
export const { SignUpUser, logout , SignInUser} = userSlice.actions;

// Selector to get all signed-up users
export const selectAllUsers = (state) => state.auth.users;

// Reducer export
export default userSlice.reducer;
