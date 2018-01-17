var request = require('request');

describe('calc', () => {
  it('should multiply 2 and 2', () => {
    expect(2*2).toBe(4);
  })
})

describe('get messages', () => {
  it('should return 200 OK', () => {
    request.get('http://localhost:3000', (err, res) => {
      expect(res.statusCode).toEqual(200);
      done()
    })
  })
  it('should return a list that is not empty', () => {
    request.get('http://localhost:3000', (err, res) => {
      expect(JSON.parse(res.body).length).toBeGreaterThan(0);
      done()
    })
  })
})
