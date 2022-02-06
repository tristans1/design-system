<template>
    <component :is="tag" :class="className" :to="{ name: routeName}">
        <slot></slot>
    </component>
</template>
<script>
    export default {
        name: 'TextComponent',
        props: {
            tag: {
                type: String,
                required: true,
            },
            className: {
                type: String,
                default: function () {
                    return this.tag;
                },
            },
            routeName: {
                type: String,
                default: function () {
                    return '';
                },
            },
        },
    };
</script>
<style scoped lang="scss">
    @import "../assets/scss/variable";
    h1,
    .h1 {
        font-size: $font-xtitle-size;
        font-weight: $font-xtitle-weight;
        margin-bottom: $spacing-l;
        text-align: center;
    }
    h2,
    .h2 {
        font-size: $font-title-size;
        font-weight: $font-title-weight;
        margin-bottom: $spacing-m;
        text-align: center;
    }
    p,
    .p {
        font-size: $font-regular-size;
        font-weight: $font-regular-weight;
        margin-bottom: $spacing-xs;
    }
    a,
    .router-link {
        font-size: $font-regular-size;
        font-weight: $font-regular-weight;
        color: $link-color;
        text-decoration: $link-underline;
        margin-bottom: $spacing-xs;
        &:hover {
            color: $link-hover-color;
            text-decoration: $link-hover-underline;
        }
    }
</style>
