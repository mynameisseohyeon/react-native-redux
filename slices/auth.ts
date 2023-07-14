import {createSlice, PayloadAction} from '@reduxjs/toolkit';

//추후 다른 곳에서 불러와야 하기 때문에 export
export interface User {
  id: number;
  usename: string;
  displayName: string;
}

interface AuthState {
  user: User | null; //|는 유니온 타입 (둘 이상의 타입을 허용할 때 사용)
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authorize(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    logout(state) {
      //업데이트하는 과정에서 action을 사용하지 않으면 생략 가능
      state.user = null;
    },
  },
});

export default authSlice.reducer;
export const {authorize, logout} = authSlice.actions;
