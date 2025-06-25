import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'

vi.mock('vue-router', () => ({
  RouterLink: { template: '<div><slot /></div>' },
}))

import ForgotPassword from '../icons/ForgotPassword.vue'

describe('ForgotPassword.vue', () => {
  it('handleReset clears email and alerts', () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})
    const wrapper = mount(ForgotPassword)
    ;(wrapper.vm as any).email = 'user@example.com'
    ;(wrapper.vm as any).handleReset()
    expect(alertSpy).toHaveBeenCalledWith('Passwort-Link wurde an user@example.com gesendet (Demo)')
    expect((wrapper.vm as any).email).toBe('')
  })
})
