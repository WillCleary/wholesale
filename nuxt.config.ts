import { resolve } from 'node:path';
import rollupNodePolyFill from 'rollup-plugin-node-polyfills';


// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    alias:{
        'images': resolve(__dirname, './assets/img'),
        'css': resolve(__dirname, './assets/css'),
        'font': resolve(__dirname, './assets/font'),
        'path': 'rollup-plugin-node-polyfills/polyfills/path'
    },
    css:[
        'assets/css/custom.css',
        'assets/css/main.css',
        "~/assets/css/tailwind.css"
    ],
    build: {
      postcss: {
        postcssOptions: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          },
        },
      },
    },
    modules:['@nuxtjs/strapi'],
    strapi:{
      url: process.env.STRAPI_URL || 'http://localhost:1337',  
      prefix: '/api',  
      version: 'v4',  
      cookie: {},  
      cookieName: 'strapi_jwt'
    }
})
