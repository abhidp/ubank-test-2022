import request from 'supertest'
import chai from 'chai'
const expect = chai.expect

let id: string, name: string
const baseUrl: string = 'https://petstore.swagger.io'

describe('CRUD pet endpoints', async () => {
  it('should POST a pet', async () => {
    const postUrl: string = '/v2/pet'
    const body = {
      id: Date.now(),
      name: 'Max'
    }

    const response = await request(baseUrl)
      .post(postUrl)
      .send(body)
      .set('accept', 'application/json')
      .set('content-type', 'application/json')

    expect(response.status).to.equal(200)
    expect(response.headers['content-type']).to.equal('application/json')
    expect(response.body).to.have.any.keys('id', 'name', 'photoUrls', 'tags')
    expect(response.body).to.include({ name: body.name })

    id = response.body.id
    name = response.body.name
  })

  it('should GET the pet by id', async () => {
    const getUrl: string = `/v2/pet/${id}`

    const response = await request(baseUrl)
      .get(getUrl)
      .set('accept', 'application/json')
      .set('content-type', 'application/json')

    expect(response.status).to.equal(200)
    expect(response.headers['content-type']).to.equal('application/json')
    expect(response.body).to.have.any.keys('id', 'name', 'photoUrls', 'tags')
    expect(response.body).to.include({ name })
  })

  it('should PUT the pet', async () => {
    const putUrl: string = `/v2/pet`
    const body = {
      id,
      name: 'Leo'
    }

    const response = await request(baseUrl)
      .put(putUrl)
      .set('accept', 'application/json')
      .set('content-type', 'application/json')
      .send(body)

    expect(response.status).to.equal(200)
    expect(response.headers['content-type']).to.equal('application/json')
    expect(response.body).to.have.any.keys('id', 'name', 'photoUrls', 'tags')
    expect(response.body).to.include({ name: body.name })
  })

  it('should DELETE the pet by id', async () => {
    const deleteUrl: string = `/v2/pet/${id}`

    const response = await request(baseUrl)
      .delete(deleteUrl)
      .set('accept', 'application/json')
      .set('api_key', 'special-key')

    expect(response.status).to.equal(200)
    expect(response.headers['content-type']).to.equal('application/json')
    expect(response.body).to.have.any.keys('code', 'type', 'messsage')
    expect(response.body).to.include({ message: `${id}` })
  })

  it('should show 404 status code for DELETED pet', async () => {
    const getUrl: string = `/v2/pet/${id}`

    const response = await request(baseUrl)
      .get(getUrl)
      .set('accept', 'application/json')
      .set('content-type', 'application/json')

    expect(response.status).to.equal(404)
    expect(response.headers['content-type']).to.equal('application/json')
    expect(response.body).to.have.any.keys('code', 'type', 'messsage')
    expect(response.body).to.include({ message: 'Pet not found' })
  })
})
