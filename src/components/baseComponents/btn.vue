<template>
    <o-button :variant="variant" :outlined="outlined" :inverted="inverted" :size="size" :icon-left="iconLeft"
        :icon-right="iconRight">
        {{ label }}
    </o-button>
</template>
  
<script>
export default {
    name: 'Btn',
    props: {
        label: {
            type: String,
            default: null
        },
        disable: {
            type: Boolean,
            default: false
        },
        outlined: {
            type: Boolean,
            default: false
        },
        inverted: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: ''
        },
        variant: {
            type: String,
            default: ''
        },
        iconLeft: {
            type: String,
            default: ''
        },
        iconRight: {
            type: String,
            default: ''
        },
    }

}
</script>