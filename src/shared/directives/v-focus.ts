import type { Directive } from 'vue';


export const vFocus: Directive<HTMLElement, {firstFocus: boolean, color: string}> = {
    mounted(el, { value: { firstFocus, color } }) {
        if (firstFocus) {
            el.focus();
        }
        el.style.outlineColor = color
    }
}