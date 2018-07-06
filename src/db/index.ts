import fs from 'fs'
const DB_PATH = 'src/db/db.json'

const getData = () => {
  if (fs.existsSync(DB_PATH)) {
    const data = fs.readFileSync(DB_PATH, 'utf8')
    return JSON.parse(data)
  } else {
    fs.writeFileSync(DB_PATH, '{}', { encoding: 'utf8', flag: 'w' })
    return {}
  }
}

const saveData = (modelName: string, modelData: Array<object>) => {
  if (fs.existsSync(DB_PATH)) {
    let data = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'))
    data[modelName] = modelData
    fs.writeFileSync(DB_PATH, JSON.stringify(data))
  } else {
    fs.writeFileSync(DB_PATH, JSON.stringify({ [modelName]: modelData }), { encoding: 'utf8', flag: 'w' })
  }
}

export default {
  findAll (): object {
    return getData()
  },
  findAllByModel (modelName: string): Array<{ id: number }> {
    return getData()[modelName] || []
  },
  findOne (modelName: string, id: number): object {
    let result = (getData()[modelName] || []).find((el: { id: number }) => el.id === +id)
    if (!result) throw new Error(`Data NOT FOUNT on type "${modelName}" with id = ${id}`)
    return result
  },
  addByModel (modelName: string, newRec: any) {
    let modelData = getData()[modelName] || []
    modelData.push(newRec)
    saveData(modelName, modelData)
    return newRec.id
  }
}
