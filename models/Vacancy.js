const db = require('../db/')

class Vacancy {
  static findAll () {
    return db.findAllByModel('vacancy')
  }

  static findOne (id) {
    if (!id) throw new Error('Parameter "id" must be specified!')
    const vacancy = db.findAllByModel('vacancy').find(el => el.id === id)
    if (!vacancy) throw new Error(`No vacancy with id = ${id}!`)
    return vacancy
  }

  static create (data) {
    return db.addByModel('vacancy', data)
  }
}

module.exports = Vacancy
