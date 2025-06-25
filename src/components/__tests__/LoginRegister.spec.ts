import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import { setActivePinia, createPinia } from 'pinia'

const handleLoginMock = vi.fn()
vi.mock('vue-router', () => ({
  useRoute: () => ({ query: { mode: 'register' } }),
  RouterLink: { template: '<div><slot /></div>' },
}))

vi.mock('../../api', () => ({
  loginEmail: ref(''),
  loginPassword: ref(''),
  registerUsername: ref(''),
  registerEmail: ref(''),
  registerPassword: ref(''),
  handleLogin: handleLoginMock,
  handleRegister: vi.fn(),
}))

import LoginRegister from '../icons/LoginRegister.vue'

describe('LoginRegister.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    handleLoginMock.mockReset()
  })
  it('displays register form when mode=register', () => {
    const wrapper = mount(LoginRegister)
    expect(wrapper.find('h2.section-title').text()).toBe('Registrieren')
  })

})
