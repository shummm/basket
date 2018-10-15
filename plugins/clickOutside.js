import Vue from 'vue'

Vue.directive("click-outside", {
    bind(el, binding, vnode) {
        event = (e) => {
            vnode.context[binding.expression](e)
        }
        stop = (e) => {
            e.stopPropagation()
        }
        el.addEventListener("click", stop);
        document.body.addEventListener("click", event);
  },
    unbind(el) {
        el.removeEventListener("click", stop);
        document.body.removeEventListener("click", event);
  },
});