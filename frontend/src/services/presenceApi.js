import api from './api'
import { ENDPOINTS } from '../api/endpoints'

export async function fetchPresence() {
    const res = await api.get(ENDPOINTS.presence.list)
    return res.data
}

export default { fetchPresence }