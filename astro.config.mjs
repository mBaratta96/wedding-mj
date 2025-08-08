// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    env: {
        schema: {
            PAYPAL_CLIENT_ID: envField.string({ context: "client", access: "public" })
        }
    }
});
