const BASE_URL = 'http://localhost:3000'

export default class APIAdapter {
  getUser = (endPoint, method, body) => {
    fetch(`${BASE_URL}/${endPoint}`, {
      method: method,
      headers: {

      },
      body: body
    })
  }
}
