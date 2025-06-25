import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'

// mock axios before importing the module
let postMock: ReturnType<typeof vi.fn>
let getMock: ReturnType<typeof vi.fn>
vi.doMock('axios', () => {
  postMock = vi.fn()
  getMock = vi.fn()
  return {
    default: {
      create: vi.fn(() => ({
        interceptors: { request: { use: vi.fn() } },
        post: postMock,
        get: getMock,
      })),
    },
  }
})

import { handleLogin, loginEmail, loginPassword } from '@/api'
import { useAuthStore } from '@/stores/auth'


describe('handleLogin', () => {
  beforeEach(() => {
    // reset pinia store before each test
    setActivePinia(createPinia())
    postMock.mockReset()
    getMock.mockReset()
    loginEmail.value = ''
    loginPassword.value = ''
  })

  it('returns true and sets token on success', async () => {
    postMock.mockResolvedValue({ data: { token: 'abc' } })
    loginEmail.value = 'user'
    loginPassword.value = 'pass'

    const result = await handleLogin()
    const store = useAuthStore()

    expect(result).toBe(true)
    expect(store.token).toBe('abc')
  })

  it('returns false on error', async () => {
    postMock.mockRejectedValue(new Error('fail'))
    loginEmail.value = 'user'
    loginPassword.value = 'pass'

    const result = await handleLogin()
    expect(result).toBe(false)
  })
})
