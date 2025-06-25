import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref } from 'vue'

let absendenMock: ReturnType<typeof vi.fn>

vi.mock('../../api', () => {
  absendenMock = vi.fn()
  return {
    filmname: ref(''),
    bewertung: ref(0),
    kommentar: ref(''),
    danke: ref(false),
    absendenBewertung: absendenMock,
    absendenMock,
  }
})


import FilmeBewerten from '../icons/FilmeBewerten.vue'

describe('FilmeBewerten.vue', () => {
  beforeEach(() => {
    absendenMock.mockReset()
  })

  it('shows error message when submission fails', async () => {
    absendenMock.mockResolvedValue(false)
    const wrapper = mount(FilmeBewerten)
    await (wrapper.vm as any).submitBewertung()
    expect((wrapper.vm as any).errorMsg).toBe('Bewertung konnte nicht gesendet werden.')
  })

  it('clears error message on success', async () => {
    absendenMock.mockResolvedValue(true)
    const wrapper = mount(FilmeBewerten)
    await (wrapper.vm as any).submitBewertung()
    expect((wrapper.vm as any).errorMsg).toBe('')
  })
})
