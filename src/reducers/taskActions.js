import { createAsyncThunk } from '@reduxjs/toolkit';
import tasks from '../data/tasks';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (_, { dispatch }) => {
    try {
      const response = await new Promise((resolve) =>
        setTimeout(() => {
          resolve({ data: tasks });
        }, 1000) 
      );
      console.log('массив из фетчТаскса:', response.data);
      return response.data;
    } catch (error) {
    }
  }
);
