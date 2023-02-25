<script setup>
import { useImageStore } from '../stores/ImageStore'

const store = useImageStore()
</script>

<template>
    <v-navigation-drawer
        expand-on-hover
        rail
    >
        <v-list>
            <v-list-item
                prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                title="Marwa Ismail"
                subtitle="marwaabdelbasit3@gmail.com"
            ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-image" title="Colored Images" value="color" @click="store.toggleColors(true)"></v-list-item>
            
            <v-list-item prepend-icon="mdi-domain" title="Coloreless Images" value="colorless" @click="store.toggleColors(false)"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>