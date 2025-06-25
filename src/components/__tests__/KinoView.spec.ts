import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import KinoView from '../icons/KinoView.vue'

describe('KinoView.vue', () => {
  it('openTrailer opens new window', () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null as any)
    const wrapper = mount(KinoView)
    ;(wrapper.vm as any).openTrailer('https://example.com')
    expect(openSpy).toHaveBeenCalledWith('https://example.com', '_blank')
  })
})
