<template>
    <o-dropdown aria-role="list" v-model="model">
        <template #trigger="{ active }">
            <o-button :inverted="inverted">
                <div :class="classToMenu">
                    <span>{{ label }}</span>
                    <DownArrowIcon />
                </div>
            </o-button>
        </template>
        <div :class="classToDivItem">
            <o-dropdown-item v-for="(option, i) in options" :key="i" :value="option.value" :class="classToItem" :default="locale.value"
                :itemActiveClass="itemActiveClass" aria-role="listitem" @click="selectElem(option.value)">{{ option.text }}
                <o-radio v-if="radioBtn" v-model="option.value" name="name" :native-value="locale" checkClass="check">
                </o-radio>
            </o-dropdown-item>
        </div>
    </o-dropdown>
</template>
  
<script>
import DownArrowIcon from '../../icons/DownArrowIcon.vue';
import { useI18n } from "vue-i18n";
import { onMounted } from "vue";
export default {
    name: "menuBtn",
    emits: ["selElemnt"],
    components: { DownArrowIcon },
    props: {
        label: {
            type: String,
            default: "",
        },
        classToItem: {
            type: String,
            default: "",
        },
        classToDivItem: {
            type: String,
            default: "",
        },
        classToMenu: {
            type: String,
            default: "",
        },
        styleCard: {
            type: String,
            default: "",
        },
        itemActiveClass: {
            type: String,
            default: "",
        },
        inverted: {
            type: Boolean,
            default: false
        },
        radioBtn: {
            type: Boolean,
            default: false
        },
        options: {
            default: [],
        },
        value: {
            type: String,
            default: "",
        },
    },
    setup(props, { emit }) {
        const { locale } = useI18n({ useScope: "global" });
        let activeValue = locale.value;
        const model = props.options;
        const selectElem = (elem) => {
            emit("selElemnt", elem);
        };
        return { selectElem, locale, model, activeValue };
    },
};
</script>
<style scoped>
.media {
    align-items: flex-start;
    display: flex;
    text-align: left;
}

.check {
    display: flex;
    width: 16px;
    height: 16px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 26px;
    background: var(--primario-60, #EEC70C);
}
</style>