import { resolve } from 'path';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    alias:{
        'images': resolve(__dirname, './assets/img'),
        'css': resolve(__dirname, './assets/css'),
        'font': resolve(__dirname, './assets/font')
    },
    css:[
        'assets/css/custom.css',
        'assets/css/main.css',
        "assets/css/tailwind.css"
    ],
    modules:['@nuxtjs/strapi'],
    strapi:{
      url: process.env.STRAPI_URL || 'http://localhost:1337',
      version: 'v4',  
      cookie: {},  
      cookieName: 'strapi_jwt'
    }
})