export const vendors = [
  {
    name: "John's Natural",
    userID: 0,
    logo: "",
    location: "",
    tags: [],
    products: [
      {
        name: 'Feather Duster', price: '100', images: [{url: 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg'}]
      },
      {
        name: 'Milk Duds', price: '15', images: [{url: 'https://images-na.ssl-images-amazon.com/images/I/61UYe5voyML._SL1079_.jpg'}]
      },
    ],
  },
  {
    name: "VeggieScrubbers",
    userID: 1,
    logo: "",
    location: "",
    tags: [],
    products: [
      {
        name: 'Vegetables', price: '0.99', images: [{url: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/12_powerhouse_vegetables_slideshow/intro_cream_of_crop.jpg'}]
      },
      {
        name: 'Punkens', price: '1', images: [{url: 'https://cdn-cloudfront.cfauthx.com/binaries/content/gallery/wf-en-us/ctas/play/events/daytime/wf-daytime-pumpkinpatch-cta.jpg'}]
      },
    ],
  }
]

export const users = [
  {
    id: 0,
    email: "info@johnsnatural.com",
    password: "test123"
  },
  {
    id: 1,
    email: "info@veggiescrubbers.com",
    password: "test321"
  },
  {
    id: 0,
    email: "m@m.m",
    password: "m"
  },
]

export const getVendor = (user) => {
  const v = vendors.find(str => str.userID === user.id)
  return Promise.resolve(v)
}

export const postProduct = (vendor,product) => {
  const v = vendors.find(ven => ven === vendor)
  if (!v) { return console.error(`vendor ${vendor} not found`) }
  else {
    v.products.push({
      name: product.name,
      images: [{url: product.img}],
      price: product.price,
    })
  }
  return Promise.resolve(v.products)
}

export const patchProduct = (vendor, update, product) => {
  const v = vendors.find(ven => ven === vendor)
  const p = v.products.find(prod => prod === product)
  if (!p) { return console.error(`product ${product} not found`) }
  else {
    p.name = update.name;
    p.images[0].url = update.img;
    p.price = update.price;
  }
  return Promise.resolve(p)
}
