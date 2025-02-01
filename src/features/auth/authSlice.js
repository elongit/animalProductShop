import { createSlice, nanoid } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
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
          state.isAuthenticated = true;
          Cookies.set("token", user.token); 
          state.error = null; 
        } else {
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

  UpdatedUser:{
      reducer(state, action){
        const {id , name , username , email , password  } = action.payload
        const user = state.users.find((user) => user.id === id);
        if(user){
          user.name = name;
          user.username = username;
          user.email = email;
          user.password = password
          console.log('user updated');
          
          toast.success('Your information updated successffly'  ,  { autoClose: 1000 , className: 'text-sm  md:text-lg w-2/3 md:w-full m-1' });

        }
      }
    }
  },
});

// Action creators
export const { SignUpUser, logout , SignInUser , UpdatedUser} = userSlice.actions;

// Selector to get all signed-up users
export const selectAllUsers = (state) => state.auth.users;

// Reducer export
export default userSlice.reducer;
