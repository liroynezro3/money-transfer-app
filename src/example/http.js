const HTTP = {
    get: (resource, endpoint) => fetch(getUrl(resource, endpoint), {method: "GET"}),
    post: (resource, endpoint) => fetch(getUrl(resource, endpoint), {method: "POST"}),
    patch: (resource, endpoint) => fetch(getUrl(resource, endpoint), {method: "PATCH"}),
    delete: (resource, endpoint) => fetch(getUrl(resource, endpoint), {method: "DELETE"}),
}

const getUrl = (resource, endpoint) => `http://localhost:8800/${resource}${endpoint}`

export default HTTP;