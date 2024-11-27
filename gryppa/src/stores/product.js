import { defineStore } from 'pinia'
import{computed, ref}from 'vue';
export const useProductStore = defineStore('product',() =>{
 const  products = ref ([
{
    id:1,
    name: 'Материнская плата ASRock Z270 GAMING K4 (LGA1151, ATX)',
    img: 'https://static.onlinetrade.ru/img/items/b/materinskaya_plata_asrock_z270_gaming_k4_lga1151_atx__2.jpg',
    price:400,
    category: 'MotherBoard',
    discription: 'hjfjjfj',
publish_at: '10.11.2024'
},


{
    id:2,
    name: 'Процессор AMD Ryzen 5 7500F, 3.7ГГц',
    img: 'https://avatars.mds.yandex.net/i?id=eafc6329a5f82b7e78730bf9f3cdc824_l-5234613-images-thumbs&n=13',
    price:1500,
    category: 'CPU',
    discription: '774974',
publish_at: '09.11.2024'
},




{
    id:3,
    name: 'Samsung Now Mass Producing Industry s Most Advanced DDR4, Using 20 Nanometer-class Process Technology',
    img: 'https://avatars.mds.yandex.net/i?id=a860486763713160891e4322feae3b5d_l-5869639-images-thumbs&n=13',
    price:1000,
    category: 'RAM',
    discription: '37873',
publish_at: '06.10.2024'
},

]);
const productsFilteredByCategoryName = computed(() =>{
    return (category, searchText) => {
        if(category){
            return products.value.filter((product) => product.category === category);
        }
        if(searchText){
            return products.value.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()));
        }
        return products.value;
    }
    });
    
    
    return {
        products,
        productsFilteredByCategoryName,
    }
    });

