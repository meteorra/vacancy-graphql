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
  title: Langs!
  description: Langs!
  condition: Langs!
  images: [Image!]!
  price: Price!
  specifics: [Specifics!]!
  shippingAndReturns: ShippingAndReturns
  sellerInfo: SellerInfo
  ratingsAndReviews: RatingsAndReviews
  xMerch: XMerch!
  sellerFeedback: SellerFeedback!
  endTime: Float!
  specialConditions: [String]!
  activeItemId: String!
  originalItemId: String!
  listingSiteId: Int!
  quantitySold: Int!
  quantityAvailable: Int!
  everyoneIsViewingListingInfo: EveryoneIsViewingListingInfo
}

type Langs {
  original: String!
  toggled: String!
}

type Image {
  thumb: String!
  preview: String!
  full: String!
}

type Price {
  price: Float!
  convertedPrice: Float!
  strikeThroughPrice: Float
  strikeThroughConvertedPrice: Float
  displayedPrice: String!
  displayedConvertedPrice: String!
  displayedStrikeThroughPrice: String
  displayedStrikeThroughConvertedPrice: String
}

type Specifics {
  name: Langs!
  value: Langs!
}

type ShippingAndReturns {
  itemLocation: String!
  shipping: [Shipping]!
  shipsTo: String!
  returns: Int!
  returnWithin: Langs!
  returnShipping: Langs!
  returnPolicy: Langs!
  refundType: Langs!
  restockingFee: String!
  additionalDetails: String!
}

type Shipping {
  destination: Langs!
  method: Langs!
  cost: Langs!
  additionalCost: Langs!
  estimatedImportCharges: Langs!
  minDeliveryDate: Langs!
  maxDeliveryDate: Langs!
  #ETA: Langs!
  costString: String
  additionalString: String
}

type SellerInfo {
  id: String!
  name: String!
  profileImage: String!
  profileLink: String!
  descriptionLink: String!
  dealsSeller: Boolean!
  hotness: Hotness!
  highlights: [String!]!
  feedbackScore: Int!
  positiveFeedback: Float!
  detailedSellerRatings: [DetailedSellerRatings!]!
}

type Hotness {
  quantitySold: Int
  quantityAvailable: Int
  discount: Int
  rating: Float
  freeShipping: String
  directShipping: String
  shipsInTwoWeeksToChina: String
}

type DetailedSellerRatings {
  word: String!
  count: Int!
  avg: Float!
}

type RatingsAndReviews {
  numRatings: Int!
  stars: Int!
  histogramArray: [String]!
  numReviews: Int!
  reviews: [Reviews!]!
  reviewsLink: String!
}

type Reviews {
  title: Langs!
  subject: Langs!
  description: Langs!
  creationDateFormatted: String!
  creationDateOriginal: String!
  authorName: String!
  feedbackCount: Int!
  rating: Float!
  id: Int!
  authorProfileLink: String!
}

type XMerch {
  differentBrandItems: [XMerchItem!]!
  greatDealsItems: [XMerchItem!]!
  sellerItems: [XMerchItem!]!
  everyoneIsViewingItems: [XMerchItem!]!
}

type XMerchItem {
  id: Int!
  title: Langs!
  image: String!
  price: Float!
  link: String!
  strikeThroughPrice: Float!
  label: String!
}

type SellerFeedback {
  reviews: [Reviews!]!
}

type EveryoneIsViewingListingInfo {
  moduleId: String!
  algoId: String!
  listings: [Float!]!
}

type Query {
  ebayAutocomplete(keyword: String!): EbayAutocomplete
  legacyListingItem(id: String!): ItemDetails
}

schema {
  query: Query
}`]
