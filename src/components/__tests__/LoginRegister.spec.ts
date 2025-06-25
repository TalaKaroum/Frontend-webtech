import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref } from 'vue'

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
  it('displays register form when mode=register', () => {
    const wrapper = mount(LoginRegister)
    expect(wrapper.find('h2.section-title').text()).toBe('Registrieren')
  })

})
