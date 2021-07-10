import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Client from 'App/Models/Client'

export default class ClientsController {
  public async create({ request }: HttpContextContract) {
    const data = request.only(['name', 'email'])
    const client = await Client.create(data)

    return client
  }

  public async list() {
    const clients = await Client.all()

    return clients
  }
}
