const request    = require('request')
const axios      = require('axios')
const { apiKey } = require('./apiKey.json')

// function flickrTagSearchOriginal(tag) {
  
//   const photoUrl = (size, photo) => 
//     `https://farm${photo.farm}.staticflickr.com/` +
//     `${photo.server}/${photo.id}_${photo.secret}_${size}.jpg` 
  
//   // Returs a Promise that resolves to an array of urls to images that 
//   // represents a (paged) result of a tag search on Flickr.
//   function flickrTagSearch (tag, page) {
//     const apiKey = getApiKey()
//     return fetch(
//       'https://api.flickr.com/services/rest/' + 
//       '?method=flickr.photos.search' +
//       '&api_key=' + apiKey +
//       '&page=' + page +
//       '&tags=' + tag + 
//       '&format=json' + 
//       '&nojsoncallback=1'   
//     )
//     .then(response => response.json())
//     .then(body => body.photos.photo)
//     // .then(photos => photos.map(photo => ({
//     //   square: photoUrl('q', photo),
//     //   medium: photoUrl('m', photo),
//     // })))
//   }
  
//   return {
//     [Symbol.asyncIterator]: async function*() {
//       let pageIndex = 1
//       while(true) { 
//         const pageData = await flickrTagSearch(tag, pageIndex)
//         for (const photo of pageData) {
//           yield photo
//         }
//         pageIndex = pageIndex + 1
//       }
//     }
//   }
// }

// my version:

const flickSearchUrl = tag => 'https://api.flickr.com/services/rest/' + 
  '?method=flickr.photos.search' +
  '&api_key=' + apiKey +
  '&page=0' +
  '&tags=' + tag + 
  '&format=json' + 
  '&nojsoncallback=1'

const flicktTagSearchPromisse = tag => fetch(flickSearchUrl(tag))

const flicktTagSearchCallback = (tag, callback) => request(flickSearchUrl(tag),
    (err, res) => {
      if (err) return callback(err, res)
      else return callback(undefined, res)
    }
  )

const photoUrl = photo => 
  `https://farm${photo.farm}.staticflickr.com/` +
  `${photo.server}/${photo.id}_${photo.secret}_q.jpg` 

// flicktTagSearchCallback("cats", (err, res) => {
//   if (err) console.log(err)
//   console.log(res)
//   res.map(photoUrl)
//   .map(console.log)
//   // console.log(photoUrl(res)) 
// })
// console.log(apiKey)

// const flicktTagSearchCallbackEasy = (tag, callback) => flicktTagSearchCallback(tag, (err, res) => {
//   callback(err, JSON.parse(res.body).photos.photo)
// })

// botar tamanho