import api from './api'
import { ENDPOINTS } from '../api/endpoints'

export async function getTokenForUsername(username) {
    const res = await api.get(ENDPOINTS.auth.token, { params: { username } })
    return res.data
}

export default { getTokenForUsername }