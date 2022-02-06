<template>
    <div id="app">
        <TheHeaderComponent/>
        <router-view></router-view>
    </div>
</template>
<script>
    import TheHeaderComponent from './components/TheHeaderComponent';

    export default {
        name: 'App',
        components: {TheHeaderComponent},
    };
</script>
<style lang="scss">
    @import "assets/scss/app";
</style>
