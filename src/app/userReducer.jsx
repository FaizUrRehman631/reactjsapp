import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchUsers = createAsyncThunk("users/fetchUsers", async ()=>{
    const response = await fetch("http://127.0.0.1:8000/api/students");
    const data = await response.json();
    // console.log("Data fetched from an API",data.data);
    return data?.data;
});

// Add new user to API
export const addUser = createAsyncThunk("users/addUser", async (user) => {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            throw new Error("Failed to add user");
        }

        const data = await response.json();
        return data; // ✅ Returning the new user data
    } catch (error) {
        console.error(error);
    }
});

// Delete user from API
export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
    // console.log("first",id)
   const response=  await fetch(`http://127.0.0.1:8000/api/students/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json", 
        },
    });
    if (!response.ok) {
        throw new Error("Failed to delete user");
    }
    return id; 
});

// Update user in API
export const updateUser = createAsyncThunk("users/updateUser", async (userData) => {
    const response = await fetch(`http://127.0.0.1:8000/api/students/${userData.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            
        },
        body: JSON.stringify(userData),
        
    });
    if (!response.ok) {
        throw new Error("Failed to update user");
    }
    const updatedUser = await response.json();
    return updatedUser;
});


const userSlice = createSlice({
    name: "users",
    initialState:{users:[],loading:false,error:null},
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload; 
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.users.push(action.payload);
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter(user => user.id !== action.payload);
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                const index = state.users.findIndex((user) => user.id === action.payload.id);
                if (index !== -1) {
                    state.users[index] = action.payload;
                }
            })
    },
});


export default userSlice.reducer;
