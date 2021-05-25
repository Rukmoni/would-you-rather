import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


export const slice = createSlice({
    name: 'auth',
    initialState: {

      Loggedin: false, //true,/**Temp setup */
      Token: 'hixfsbaqcnnhhimzxcxeo9yjjpvcehhq', //'foeu5piczi5md4tlsyr46sz604cuhkoi' /**Temp setup */,
  
    },
    reducers: {
      LoggedInGuest: (state, action) => {
        console.log('LoggedInGuest');
        state.isGuest = true;
      },
    }
});

export default slice.reducer;