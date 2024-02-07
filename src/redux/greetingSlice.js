import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getGreeting = createAsyncThunk('get/message',
  async () => {
    try {
      const response = await fetch('http://localhost:3000/api/greeting');
      console.log(response);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: '',
    status: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getGreeting.pending, (state) => {
      state.status = 'Loading';
    });
    builder.addCase(getGreeting.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.greeting = action.payload;
    });

    builder.addCase(getGreeting.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export default greetingSlice.reducer;
