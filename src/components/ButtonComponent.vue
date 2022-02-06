<template>
    <button :class='styleType === "main" ? "button-main" : "button-alt"' :type="type">
        <slot></slot>
    </button>
</template>
<script>
    export default {
        name: 'ButtonComponent',
        props: {
            type: {
                type: String,
                required: true
            },
            styleType: {
                type: String,
                required: true,
            },
        },
    };
</script>
<style scoped lang="scss">
    @import '../assets/scss/variable';
    button {
        cursor: pointer;
        border: $button-border;
        border-radius: $button-border-radius;
        min-width: $button-minWidth;
        padding: $button-padding;
        font-family: $primary-font-main;
        font-size: $font-regular-size;
        margin: $spacing-m 0;
    }
    .button-main {
        color: $btn-main-color;
        background-color: $btn-main-bg;
        &:hover {
            background-color: $btn-main-hover-bg;
        }
    }
    .button-alt {
        background-color: $btn-alt-bg;
        color: $btn-alt-color;
        &:hover {
            background-color: $btn-alt-hover-bg;
        }
    }
</style>
