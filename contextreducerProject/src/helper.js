export const getData = (key)=>{
const datalist = JSON.parse(localStorage.getItem(key)) ?? [];
return datalist;
}