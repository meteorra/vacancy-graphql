import Vacancy from './models/Vacancy'
import fetch from 'node-fetch'

export default {
  Query: {
    getEbayAutocomplete (parent: any, args: any) {
      return fetch(`https://haitao.ebay.com/data/autocomplete?keyword=${args.keyword}&site=none`)
        .then(response => response.json())
        .then(data => {
          return data
        })
        .catch()
    },
    getEbayProduct (parent: any, args: any) {
      return fetch(`https://haitao.ebay.com/itm/${args.id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          return data.pageData.itemDetails
        })
        .catch()
    }
  }
}
