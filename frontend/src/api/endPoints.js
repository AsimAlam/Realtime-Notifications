const BASE = ''
export const ENDPOINTS = {
    auth: { token: `${BASE}/auth/token` },
    presence: { list: `${BASE}/presence` },
    notify: { post: `${BASE}/notify` }
}
export default ENDPOINTS