import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from '../reducers/taskActions';

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
  },
});

export default tasksSlice.reducer;
