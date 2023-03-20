import { createSlice } from '@reduxjs/toolkit';
//import { auth } from '../firebase';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { setUser, setLoading, setError, clearError } = authSlice.actions;

export const registerUser = ({ firstName, lastName, email, password }) => async (dispatch) => {
  dispatch(setLoading(true));
//   try {
//     const result = await auth.createUserWithEmailAndPassword(email, password);
//     await result.user.updateProfile({
//       displayName: `${firstName} ${lastName}`,
//     });
//     dispatch(setUser(result.user));
//   } catch (error) {
//     dispatch(setError(error.message));
//   }
};

export default authSlice.reducer;
