<script setup>
    import { useImageStore } from '../stores/ImageStore'

    const store = useImageStore()

    store.getImages()

    const copyUrl = async (url) => {
        await navigator.clipboard.writeText(url)
    }
</script>

<template>
    <v-card class="ma-5 pa-5">
        <v-row>
            <v-col
                v-for="img in store.images"
                :key="img.id"
                cols="4"
                sm="3"
                md="2"
                lg="1"
            >
                <v-hover v-slot="{ isHovering, props }">
                    <v-card 
                        v-bind="props"
                        :elevation="isHovering ? 24 : 6"
                    >
                        <v-img 
                            :src="img.url" 
                            cover
                            :lazy-src="img.url"
                            :class="{'greyscale':!store.isColor}"
                            @click="copyUrl(img.url)"
                        >
                            <template v-slot:placeholder>
                                <div class="d-flex align-center justify-center fill-height">
                                    <v-progress-circular
                                        color="grey-lighten-4"
                                        indeterminate
                                    ></v-progress-circular>
                                </div>
                            </template>
                        </v-img>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </v-card>
</template>

<style scoped>
.greyscale {
    filter: grayscale(1);
}
</style>