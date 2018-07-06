import db from '../db'

class Vacancy {
  static findAll () {
    return db.findAllByModel('Vacancy')
  }

  static findOne (id: number) {
    if (!id) throw new Error('Parameter "id" must be specified!')
    return db.findOne('Vacancy', id)
  }

  static create (data: { id?: number }) {
    data.id = db.findAllByModel('Vacancy').reduce((max: number, el) => el.id > max ? el.id : max, 0) + 1
    return db.addByModel('Vacancy', data)
  }
}

export default Vacancy
