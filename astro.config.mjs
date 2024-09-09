import { defineConfig } from "astro/config";

import partytown from "@astrojs/partytown";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
    integrations: [
        partytown(), vue()
    ],
});
