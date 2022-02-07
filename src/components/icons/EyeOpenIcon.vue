<template>
    <Icon class="icon" icon="akar-icons:eye"/>
</template>
<script>
    import {Icon} from '@iconify/vue2';

    export default {
        name: 'EyeOpenIcon',
        components: {
            Icon,
        },

    };
</script>
<style scoped lang="scss">
    @import "../../assets/scss/variable";
    .icon {
        color: $icon-color;
        font-size: $icon-size;
    }
</style>
