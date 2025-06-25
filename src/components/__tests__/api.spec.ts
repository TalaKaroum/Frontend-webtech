import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'

// ✅ Mock-Funktionen vorher deklarieren
const postMock = vi.fn()
const getMock = vi.fn()

// ✅ Axios mocken (nachdem Funktionen existieren)
vi.mock('axios', () => ({
  default: {
    create: () => ({
      interceptors: { request: { use: vi.fn() } },
      post: postMock,
      get: getMock,
    }),
  },
}))

import { handleLogin, loginEmail, loginPassword } from '@/api'
import { useAuthStore } from '@/stores/auth'

describe('handleLogin', () => {
  beforeEach(() => {
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
