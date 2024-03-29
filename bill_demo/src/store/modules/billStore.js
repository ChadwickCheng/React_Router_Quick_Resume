// 账单相关store
import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {dataUrl} from '@/config/config';

const billStore = createSlice({
  name: 'bill',
  initialState:{
    billList: []
  },
  reducers:{
    setBillList(state, action){
      state.billList = action.payload;
    },
    // 同步添加账单方法
    addBill (state, action) {
      state.billList.push(action.payload)
    }
  }
})
// 解构出方法
const {setBillList, addBill} = billStore.actions;
// 异步
const getBillList = () => {
  return async (dispath)=>{
    const res = await axios.get(dataUrl);
    dispath(setBillList(res.data));
  }
}
const addBillList = (data) => {
  return async (dispatch) => {
    // 编写异步请求
    const res = await axios.post(dataUrl, data)
    // 触发同步reducer
    dispatch(addBill(res.data))
  }
}

export {getBillList, addBillList};
// 导出reducer
const reducer = billStore.reducer;
export default reducer;