import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref } from 'vue'

let handleLoginMock: ReturnType<typeof vi.fn>
let push: ReturnType<typeof vi.fn>
vi.doMock('vue-router', async () => {
  push = vi.fn()
  const actual = await vi.importActual<typeof import('vue-router')>('vue-router')
  return { ...actual, useRouter: () => ({ push }), RouterLink: { template: '<div><slot /></div>' } }
})


vi.doMock('../../api', () => {
  handleLoginMock = vi.fn()
  return {
    loginEmail: ref(''),
    loginPassword: ref(''),
    handleLogin: handleLoginMock,
  }
})

import Navbar from '../icons/Navbar.vue'

describe('Navbar.vue', () => {
  it('toggleLoginMenu changes visibility', () => {
    const wrapper = mount(Navbar)
    expect((wrapper.vm as any).showLogin).toBe(false)
    ;(wrapper.vm as any).toggleLoginMenu()
    expect((wrapper.vm as any).showLogin).toBe(true)
  })

  it('goToSearch triggers router push', () => {
    const wrapper = mount(Navbar)
    ;(wrapper.vm as any).searchTerm = 'test'
    ;(wrapper.vm as any).goToSearch()
    expect(push).toHaveBeenCalledWith('/suche?q=test')
  })
})
