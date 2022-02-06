<template>
    <Icon class="icon" icon="akar-icons:eye-closed"/>
</template>
<script>
    import {Icon} from '@iconify/vue2';

    export default {
        name: 'EyeCloseIcon',
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
