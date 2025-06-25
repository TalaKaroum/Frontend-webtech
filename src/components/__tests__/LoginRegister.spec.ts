import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import { setActivePinia, createPinia } from 'pinia'

// ✅ Mock zuerst definieren
let handleLoginMock: any
let handleRegisterMock: any

vi.mock('vue-router', () => ({
  useRoute: () => ({ query: { mode: 'register' } }),
  RouterLink: { template: '<div><slot /></div>' },
}))

vi.mock('../../api', () => {
  handleLoginMock = vi.fn()
  handleRegisterMock = vi.fn()
  return {
    loginEmail: ref(''),
    loginPassword: ref(''),
    registerUsername: ref(''),
    registerEmail: ref(''),
    registerPassword: ref(''),
    handleLogin: handleLoginMock,
    handleRegister: handleRegisterMock,
  }
})

import LoginRegister from '../icons/LoginRegister.vue'

describe('LoginRegister.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    handleLoginMock.mockReset()
    handleRegisterMock.mockReset()
  })

  it('displays register form when mode=register', () => {
    const wrapper = mount(LoginRegister)
    expect(wrapper.find('h2.section-title').text()).toBe('Registrieren')

  })
  it('submitLogin shows error when login fails', async () => {
    handleLoginMock.mockRejectedValue(new Error('fail'))
    const wrapper = mount(LoginRegister)
    ;(wrapper.vm as any).loginPassword = 'pass'
    await (wrapper.vm as any).submitLogin()
    expect(handleLoginMock).toHaveBeenCalled()
    expect((wrapper.vm as any).loginError).toBe('Login fehlgeschlagen')
    expect((wrapper.vm as any).loginPassword).toBe('')
  })
})
