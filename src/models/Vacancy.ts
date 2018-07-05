import db from '../db'

class Vacancy {
  static findAll () {
    return db.findAllByModel('Vacancy')
  }

  static findOne (id: number) {
    if (!id) throw new Error('Parameter "id" must be specified!')
    const vacancy = db.findAllByModel('Vacancy').filter(el => el.id === id)[0]
    if (!vacancy) throw new Error(`No vacancy with id = ${id}!`)
    return vacancy
  }

  static create (data: any) {
    data.id = db.findAllByModel('Vacancy').reduce((max: number, el) => el.id > max ? el.id : max, 0) + 1
    return db.addByModel('Vacancy', data)
  }
}

export default Vacancy
