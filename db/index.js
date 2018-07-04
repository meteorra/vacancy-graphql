const fs = require('fs')
const DB_PATH = 'db/db.json'

function getData () {
  if (fs.existsSync(DB_PATH)) {
    const data = fs.readFileSync(DB_PATH, 'utf8')
    return JSON.parse(data)
  } else {
    fs.writeFileSync(DB_PATH, '{}', { encoding: 'utf8', flag: 'w+' })
    return {}
  }
}

function saveData (modelName, modelData) {
  if (fs.existsSync(DB_PATH)) {
    const data = fs.readFileSync(DB_PATH, 'utf8')
    fs.writeFileSync(DB_PATH, JSON.stringify(Object.assign(JSON.parse(data), { [modelName]: modelData })))
  } else {
    fs.writeFileSync(DB_PATH, JSON.stringify({ [modelName]: modelData }), { encoding: 'utf8', flag: 'w+' })
  }
}

module.exports = {
  findAll () {
    return getData()
  },
  findAllByModel (modelName) {
    return getData()[modelName] || []
  },
  addByModel (modelName, newRec) {
    let modelData = getData()[modelName] || []
    newRec.id = modelData.map(el => el.id).reduce((max, curr) => curr > max ? curr : max, 0) + 1
    modelData.push(newRec)
    saveData(modelName, modelData)
    return newRec.id
  }
}
