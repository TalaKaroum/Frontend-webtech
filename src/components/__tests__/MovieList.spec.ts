import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'

import MovieList from '../icons/MovieList.vue'

describe('MovieList.vue', () => {
  beforeEach(() => {
    vi.spyOn(window.localStorage.__proto__, 'getItem').mockReturnValue('[]')
    vi.spyOn(window.localStorage.__proto__, 'setItem').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('addMovie adds a new movie', async () => {
    const wrapper = mount(MovieList)
    const initial = (wrapper.vm as any).movies.length
    ;(wrapper.vm as any).newMovie = {
      title: 'Neu',
      genre: 'Test',
      poster: 'url',
      rating: 5,
    }
    await (wrapper.vm as any).addMovie()
    expect((wrapper.vm as any).movies.length).toBe(initial + 1)
  })

  it('filteredMovies filters by search and rating', () => {
    const wrapper = mount(MovieList)
    ;(wrapper.vm as any).searchQuery = 'dark'
    ;(wrapper.vm as any).minRating = 8.5
    const result = (wrapper.vm as any).filteredMovies
    expect(result).toHaveLength(1)
    expect(result[0].title).toBe('The Dark Knight')
  })
})
