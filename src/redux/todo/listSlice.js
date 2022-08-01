import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//createAsyncThunk ile get metodu ile veri çağırırken kullanırız

//Get metodu ile verileri alıyoruz
// export const getTodoAsync = createAsyncThunk('todos/getTodosAsync', async () => {
//     const res = await fetch('http://localhost:7000/todos');
//     return await res.json()
// })

/*
Post metodu ile items dizisine eklenen verileri gönderiyoruz
export const addtodoAsync = createAsyncThunk('todo/addTodoAsync', async (data) => {
    const res = await fetch.post('http://localhost:7000/todos',data)
    return await res.json()
})


Burada todo üzerine tıklandığında complete özelliğini iletiriz
export const toggletodoAsync = createAsyncThunk('todo/toggleTodoAsync', async ({id, data}) => {
    const res = await fetch.patch(`${procces.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}, data`)
    return await res.json()
})

Delete metodu ile todos içerisidneki elemanı sileceğiz
export cont removeItemAsync = createAsyncThunk('todos/removeTodoASync', async(id) => {
    await fetch.delete(`${procces.env.REACT_APP_API_BASE_ENDPOINT}/todos/${id}`))
    return await id
})

export const clearTodoAsync = createAsyncThunk('todos/clearTodoAsync', async () => {
    await fetch.delete(${procces.env.REACT_APP_API_BASE_ENDPOINT}/todos)
    return await res.json()
})




*/


export const listSlice = createSlice({
    
    name : 'todos',
    initialState : {
        items : [
            {
                id : '1',
                title :'Ömer',
                completed : true
            },
            {
                id : '2',
                title :'Uğur',
                completed : false
            },
            {
                id : '3',
                title :'Hasan',
                completed : false
            },
            {
                id : '4',
                title :'Ferit',
                completed : true
            },
            // isLoading: false,
            // error : null
        ],
        activeFilter : 'all',
        /* extraReducer : {
              Get Todos
            pending bize verinin yüklenme aşamasında olduğunu belirtir
            [getTodoAsync.pending] : (state, action) => {
                state.isLoading = true
            },
            işlem tamamlandığında fulfilled olduğunda yani
            [getTodosAsyn.fulfilled] : (state, action) => {
                    state.items = actions.payload;
                    state.isLoading = false
            },
            eğer yüklenemezse rejected olur ve hata mesajını almak isteriz
            [getTodosAsyn.rejected] : (state, action) => {
                    state.isLoading= false
                    state.error = action.error.message
                }
             }
         },
                Post Todo
         [ pstTodoAsync.fulfilled] : (state, action) => {
            state.items.push(action.payload)
         },
                Patch Todo
         [toggleTodoAsync.fulfilled] : (state, action) => {
            const {id, completed} = action.payload
            const index = state.items.findIndex(item => item.id=== id)
            state.items[index].completed = completed
         },
               Remove Todo
         [removeTodoAsync.fulfilled] : (state, action) => {
            const id = action.payload
            const index = state.items.findIndex((item) => item.id !== id)
            state.items.splice(index, 1)
         },
            Clear Todos
         [clearTodoAsync.fulfilled] : (state, action) => {
            const clearItems = state.items.filter((item) => item.title === item.id)
            state.items = clearItems
         }
         */
    },
    reducers : {
       addNewTodo : (state, action) => {
        state.items.push(action.payload)
       },
       toggle : (state, action) => {
            const {id} = action.payload;
            const item = state.items.find(item => item.id === id)

            item.completed = !item.completed
       },
       destroy : (state, action) => {
        const id =action.payload;
        const filtered = state.items.filter((item) => item.id !== id)
        state.items = filtered
       },
       change : (state, action) => {
        state.activeFilter = action.payload
       },
       clearCompleted : (state) => {
        const filtered = state.items.filter(item => item.completed ===false)
        state.items = filtered
       }
    },
});

//selecTodos değişkeni ile bütün componentler içerisinde tek tek items array'ini seçmek yerine burada tanımlayıp sadece import etmek yeterli olacak.
export const selectTodos = state => state.todos.items

//filtereme işlemi bu şekilde selector ile yapılabilir.
// export const selectFilteredTodos = (state) => {
//     if(state.todos.ac === "all") {
//         return state.todos.items
//     }
//     return state.todos.items.filter((todo) => 
//         state.todos.activeFilter === "active" 
//             ?  todo.completed  === false 
//             : todo.completed === true
//     )
// }

export const { addNewTodo ,toggle, destroy, change, clearCompleted} = listSlice.actions;
export default listSlice.reducer;