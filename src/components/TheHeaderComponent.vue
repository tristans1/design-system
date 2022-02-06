<template>
    <nav>
        <TextComponent tag="h1" class-name="text-white">
            Design System
        </TextComponent>
    </nav>
</template>
<script>
    import TextComponent from './TextComponent';

    export default {
        name: 'TheHeaderComponent',
        components: {TextComponent},
    };
</script>
<style scoped lang="scss">
    @import "../assets/scss/variable";
    nav {
        padding: $spacing-m;
        background-color: $header-bg;
        color: $header-color;
        margin-bottom: $spacing-xxl;
        h1 {
            margin-bottom: 0;
            text-align: left;
        }
    }
</style>
