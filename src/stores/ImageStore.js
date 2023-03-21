import { defineStore } from "pinia";
import { AXIOS } from "@/axios";

export const useImageStore = defineStore('Image', {
    state: () => ({
        images: [],
        isColor: true
    }),

    getters: {
        
    },

    actions: {
        getImages() {
            AXIOS.get('photos?_start=0&_limit=50')
            .then(res => {
                this.images = res.data
            })
            .catch(err => {
                console.log(err.message);
            })
        },

        toggleColors(color) {
            this.isColor = color
        }
    }
})