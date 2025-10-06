import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await fetch(`http://localhost:5000/posts`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addPost = createAsyncThunk(
  "post/addPost",
  async (post, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;
    const { auth } = getState();
    post.userId = auth.user.id;
    try {
      const response = await fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(post),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editPost = createAsyncThunk("posts/editPost", async (dataPost, thunkApi) => {
  const {rejectWithValue} = thunkApi;
  
  try {
    const response = await fetch(`http://localhost:5000/posts/${dataPost.id}`,{
      method:"PATCH",
      body: JSON.stringify(dataPost), 
      headers: {
        "Content-type": "application/json",
      }
    });
    const data = await response.json();
    
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      await fetch(`http://localhost:5000/posts/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const detailPost = createAsyncThunk(
  "posts/detailPost",
  async (id, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const response = await fetch(`http://localhost:5000/posts/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const PostSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    post: {},
    isLoading: false,
    error: null,
    isAdded: false,
  },
  reducers: {
    cleanPost: (state) => {
      state.post = {};
    }
  },
  extraReducers: (builder) => {
    // Get Posts
    builder.addCase(getPosts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    }),
      builder.addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      }),
      builder.addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    //Add Post
    builder.addCase(addPost.pending, (state) => {
      state.error = null;
      state.isLoading = true;
    }),
      builder.addCase(addPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts.push(action.payload);
      }),
      builder.addCase(addPost.rejected, (state, action) => {
        state.isAdded = false;
        state.error = action.payload;
      }),

      //Edit Post
      builder.addCase(editPost.pending, (state) => {
        state.isLoading = true;
        state.error = null
      }),
      builder.addCase(editPost.fulfilled, (state, action) => {
        state.isLoading = false;
         state.post = action.payload;
      }),
      builder.addCase(editPost.rejected, (state, action) => {
        state.error = action.payload; 
      })

      // Delete Post
      builder.addCase(deletePost.pending, (state) => {
        // state.isLoading = true;
        state.error = null;
      }),
      builder.addCase(deletePost.fulfilled, (state, action) => {
        // state.isLoading = false;
        console.log(action.payload);
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      }),
      builder.addCase(deletePost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

      // Details Post 
      builder.addCase(detailPost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.post = {}
      }),
      builder.addCase(detailPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload;
      }),
      builder.addCase(detailPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
});
export const {cleanPost} = PostSlice.actions;
export default PostSlice.reducer;
