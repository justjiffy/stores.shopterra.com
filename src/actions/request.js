/**
 * this file is responsible for hooking http requests into the `api` redux store.
 * it dispatches a loading event followed by a success event or failure event.
 *
 * The advantages this provides over a plain `fetch` within a component are:
 *
 * 1. Two components loaded on the same screen that make the same http request.
 *
 * 2. In case of bad internet or server flakiness, retries are easy and
 *    the response from a retry can still reach the caller component.
 *
 * 3. Components rendered on different screens can re-use previously fetched http responses
 *    without the need for a special reducer to share the data.
 *
 *
 */

export const createLeadKey = 'email.submit'
export const helloKey      = 'unicorn'
export const inputKey      = 'input'

export const baseUrl = window.location.href.match(/localhost/)
  ? 'http://localhost:3000'
  : 'https://apistaging.shopterra.com'

/**
 * graph is a convenience wrapper around request for making graphql queries.
 *
 * @param {string} key  shared key for this query. this allows multiple components to await the same http request.
 * @param {string} query graphql query
 * @param {object} variables optional object containing variables
 *
 */
export function graph(key, query, variables = {}) {
  return request({
    url: '/graph',
    method: 'POST',
    key,
    body: {
      query,
      variables,
    }
  })
}

/**
 * request provides the interface to fetch, and most `args` are passed through directly.
 *
 * it deals with massaging the input (JSON.stringify'ing objects, adding default headers etc)
 *
 * and dispatching loading events, response events, and error events to redux.
 *
 * @param  {object} args:               args to passthru to fetch
 * @param  {string} args.url:           url specified as relative path of API base url
 * @param  {string} args.key:           request key for re-use
 * @param  {boolean} args.force:        whether we should do the request even if it's in progress
 * @param  {string} [args.method=GET]:  http method
 * @param  {object} [args.headers]:     http headers
 * @param  {object|string} [args.body]: json body
 * @param  {boolean} [args.upload]:       whether to do an upload
 * @param  {string} [args.filePath]:      uploadable file path
 * @param  {string} [args.fieldName]:      form field name for uploaded file
 * @param  {string} [args.fileName]:      filename for uploaded file
 * @param  {string} [args.fileType]:      mime type of uploaded file
 * @return {promise}:                   result of fetch (error is not thrown)
*/
export default function request({key, url, force, ...args}) {
  return function(dispatch, getState) {
    const state     = getState()
    args.method     = args.method || 'GET'
    const isLoading = (state.api[key] || {}).loading

    if( isLoading && !force ) {
      var err = new Error(`Not going to load ${key} twice`)
      err.duplicateLoad = true
      return Promise.reject(err)
    }

    dispatch({type: 'api:loading', key})

    const httpRequest = !args.upload ?
      http(url, args) :
      upload(args)

    return httpRequest.then((json) => {
      const payload = json.data || json
      dispatch({type: 'api:yes', payload, key})
      return json
    }).catch((err) => {
      dispatch({type: 'api:no', error: err, key})
      throw err
    })
  }
}

//
// Private Methods
//

function http(path, options = {}) {
  if( path[0] !== '/' ) path = `/${path}`;

  options.headers = options.headers || {}
  options.headers['Content-Type'] = 'application/json'
  options.headers['Accept']       = 'application/json'
  if( options.body && typeof options.body !== 'string' ) {
    options.body = JSON.stringify(options.body)
  }

  var q = {};
  return fetch(
    `${options.baseUrl || baseUrl}${path}`,
    options,
  ).then((response) => {
    q.ok         = response.ok
    q.statusCode = response.status
    if( q.statusCode === 204 ) { return true }
    return response.json()
  }).then((json) => {
    if( !q.ok ) {
      var err = new Error(json.message || json.error || JSON.stringify(json))
      err.name = 'ApiError'
      err.statusCode = q.statusCode
      throw err
    }
    return json
  }).catch((err) => {
    if( err.name === 'ApiError' ) { throw err }

    err.statusCode = q.statusCode
    throw err
  })
}

function upload({url, fieldName, file, ...params}) {
  return new Promise((yes, no) => {
    var body = new FormData()
    body.append(fieldName, file)

    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = (e) => {
      if( xhr.readyState !== 4 ) { return }

      if( 200 <= xhr.status && xhr.status <= 299 ) {
        const json = JSON.parse(xhr.responseText)
        return yes(json)
      } else {
        if( xhr.status === 0 ) {
          return no(new Error('Upload failed, check your internet connection.'))
        }
        no(`Error #${xhr.status}: ${xhr.responseText}`)
      }
    }
    xhr.open('POST', `${baseUrl}${url}`)
    xhr.send(body)
  }).then(payload => {
    return payload
  }).catch((err) => {
    console.error(err.message || JSON.stringify(err))
    throw err
  })
}
