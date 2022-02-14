import nock from 'nock'

import { getBlogs } from './api'

describe('getBlogs', () => {
  it('returns blogs from api call', () => {
    nock('http://localhost')
      .get('/api/v1/blogs/')
      .reply(200, { blogs: ['panipat', 'parineeta'] })

    expect.assertions(2)
    return getBlogs()
      .then((blogs) => {
        expect(blogs.blogs).toEqual(['panipat', 'parineeta'])
        expect(nock.isDone()).toEqual(true)
        return null
      })
  })
})
