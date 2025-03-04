import { throttle } from '@opentiny/utils'
import { getScrollContainer } from '@opentiny/utils'

const CONTEXT_KEY = '@@infinitescrollContext'
const OBSERVER_CHECK_INTERVAL = 50
const ATTR_DEFAULT_DELAY = 200
const ATTR_DEFAULT_DISTANCE = 0

const attrs = {
  delay: { type: Number, default: ATTR_DEFAULT_DELAY },
  disabled: { type: Boolean, default: false },
  distance: { type: Number, default: ATTR_DEFAULT_DISTANCE },
  immediate: { type: Boolean, default: true }
}

const isNull = (val) => val === null

const parseAttrValue = (attrVal, type, defaultVal) => {
  if (isNull(attrVal)) return defaultVal

  if (type === Boolean) {
    return attrVal !== 'false'
  } else if (type === Number) {
    return Number(attrVal)
  }
}

const computeScrollOptions = (el, instance) =>
  Object.entries(attrs).reduce((accumulator, [name, option]) => {
    const { type, default: defaultValue } = option
    const attrKey = `infinite-scroll-${name}`
    const $attrValue = instance.$el.getAttribute(attrKey)
    const attrValue = el.getAttribute(attrKey)
    let value

    if ((isNull(attrValue) && isNull($attrValue)) || !isNull(attrValue)) {
      value = parseAttrValue(attrValue, type, defaultValue)
    }

    if (isNull(attrValue) && !isNull($attrValue)) {
      value = parseAttrValue($attrValue, type, defaultValue)
    }

    accumulator[name] = Number.isNaN(value) ? defaultValue : value

    return accumulator
  }, {})

const stopObserver = (el) => {
  const { observer } = el[CONTEXT_KEY]

  if (observer) {
    observer.disconnect()
    delete el[CONTEXT_KEY].observer
  }
}

const accumOffsetTop = (el) => {
  let totalOffset = 0
  let parent = el

  while (parent) {
    totalOffset += parent.offsetTop
    parent = parent.offsetParent
  }

  return totalOffset
}

const distanceOffsetTop = (el, containerEl) => Math.abs(accumOffsetTop(el) - accumOffsetTop(containerEl))

const scroller = (el, cb) => {
  const { container, containerEl, instance, observer, lastScrollTop } = el[CONTEXT_KEY]
  const { disabled, distance } = computeScrollOptions(el, instance)
  const { clientHeight, scrollHeight, scrollTop } = containerEl
  const deltaTop = scrollTop - lastScrollTop

  el[CONTEXT_KEY].lastScrollTop = scrollTop

  if (observer || disabled || deltaTop < 0) return

  let isTrigger = false

  if (container === el) {
    isTrigger = scrollHeight - (clientHeight + scrollTop) <= distance
  } else {
    const { clientTop, scrollHeight: height } = el
    const offsetTop = distanceOffsetTop(el, containerEl)

    isTrigger = scrollTop + clientHeight >= offsetTop + clientTop + height - distance
  }

  if (isTrigger) {
    cb.call(instance)
  }
}

function observerChecker(el, cb) {
  const { containerEl, instance } = el[CONTEXT_KEY]
  const { disabled } = computeScrollOptions(el, instance)

  if (disabled || containerEl.clientHeight === 0) return

  if (containerEl.scrollHeight <= containerEl.clientHeight) {
    cb.call(instance)
  } else {
    stopObserver(el)
  }
}

const bind = (el, binding, vnode) => {
  const instance = binding.instance || vnode.context
  const { value: cb } = binding

  if (typeof cb !== 'function') {
    throw new TypeError('[TINY Error][InfiniteScroll] "v-infinite-scroll" binding value must be a function')
  }

  instance.$nextTick(() => {
    const { delay, immediate } = computeScrollOptions(el, instance)
    const container = getScrollContainer(el, true)
    const containerEl = container === window ? document.documentElement : container
    const onScroll = throttle(delay, scroller.bind(null, el, cb))

    if (!container) return

    el[CONTEXT_KEY] = { instance, container, containerEl, delay, cb, onScroll, lastScrollTop: containerEl.scrollTop }

    if (immediate) {
      const observer = new MutationObserver(throttle(OBSERVER_CHECK_INTERVAL, observerChecker.bind(null, el, cb)))

      el[CONTEXT_KEY].observer = observer

      observer.observe(el, { childList: true, subtree: true })

      observerChecker(el, cb)
    }

    container.addEventListener('scroll', onScroll)
  })
}

const update = (el, binding, vnode) => {
  if (!el[CONTEXT_KEY]) {
    const instance = binding.instance || vnode.context

    return instance.$nextTick()
  } else {
    const { containerEl, cb, observer } = el[CONTEXT_KEY]

    if (containerEl.clientHeight && observer) {
      observerChecker(el, cb)
    }
  }
}

const unbind = (el) => {
  const { container, onScroll } = el[CONTEXT_KEY]

  if (container) container.removeEventListener('scroll', onScroll)

  stopObserver(el)
}

export default {
  bind,
  update,
  unbind,
  beforeMount: bind,
  updated: update,
  unmounted: unbind
}
