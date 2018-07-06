export default [`
type EbayAutocomplete {
  prefix: String!
  brands: [String]!
  site: String!
  result: [EbayAutocompleteResult!]!
}

type EbayAutocompleteResult {
  keyword: String!
  categoryName: String!
  categoryId: Int!
  source: String!
  index: Int!
}

type ItemDetails {
  categoryId: Int!
  id: String!
  brand: String
  title: ItemLang!
  description: ItemLang!
  condition: ItemLang!
  images: [ItemImage!]!
  price: ItemPrice!
}

type ItemLang {
  original: String!
  toggled: String!
}

type ItemImage {
  thumb: String!
  preview: String!
  full: String!
}

type ItemPrice {
  price: Float!
  convertedPrice: Float!
  strikeThroughPrice: Float
  strikeThroughConvertedPrice: Float
  displayedPrice: String!
  displayedConvertedPrice: String!
  displayedStrikeThroughPrice: String
  displayedStrikeThroughConvertedPrice: String
}

type Query {
  getEbayAutocomplete(keyword: String!): EbayAutocomplete
  getEbayProduct(id: String!): ItemDetails
}

schema {
  query: Query
}`]
