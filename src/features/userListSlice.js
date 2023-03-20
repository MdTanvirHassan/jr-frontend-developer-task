import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsersList } from '../api/userApi';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetchUsersList();
  return response.data;
});

const userListSlice = createSlice({
  name: 'userList',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
    page: 1,
    total_pages: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.page = action.payload.page;
        state.total_pages = action.payload.total_pages;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectUserList = (state) => state.userList;
export const selectIsLoading = (state) => state.userList.status === 'loading';
export const selectError = (state) => state.userList.error;

export default userListSlice.reducer;
