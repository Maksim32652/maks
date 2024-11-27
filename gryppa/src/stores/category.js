import { defineStore } from "pinia";


export const useCategoryStore = defineStore('category',() =>{
const categories =[
    'VideoCard',
    'CPU',
    'MotherBoard',
    'RAM',
];
return{
    categories,
}

});