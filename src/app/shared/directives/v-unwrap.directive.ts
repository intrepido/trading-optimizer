import { Ref } from "vue";

export const vUnwrap = {
    mounted: (el: any, active: Ref) => {
        if (active.value) {
            Array.from(el.children).forEach(child => {
                el.insertAdjacentElement('beforebegin', child)
            })
            el.remove()
        }
    }
}