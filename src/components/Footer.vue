<template>
    <footer
        class="lg:flex lg:items-baseline p-8 uppercase font-semibold tracking-widest space-y-4 md:space-y-6 lg:space-x-16">
        <nav class="grid grid-flow-row md:grid-flow-col md:auto-cols-min gap-x-16 gap-y-4">
            <span><a class="border-b-2" href="/about">About</a></span>
            <span><a class="border-b-2" href="mailto:info@badwrong.dev">Email</a></span>
            <span><a class="border-b-2" href="https://twitter.com/BadWrongOU">Twitter</a></span>
        </nav>
        <div class="grid grid-flow-row md:grid-flow-col md:auto-cols-max gap-x-16 gap-y-4">
            <span class="">Made in Tartu <img class="inline w-5 mx-0.5 mb-1" src="/cloud.rain@2x.png"
                    alt="Cloud Rain Icon" /> Estonia</span>
            <span>© Bad<span class="mx-1">&</span>Wrong OÜ, {{ currentYear }}</span>
        </div>
    </footer>
</template>

<script lang="ts">
export default {
    name: "Footer",

    computed: {
        currentYear() {
            return new Date().getFullYear();
        }
    }
}
</script>

<style scoped>

</style>
