import config from '@/config/index.json'
import axios from 'axios'

export default axios.create({
  baseURL: `${config.apiUrl}`,
  headers: {
    'Content-Type': 'application/json'
  }
})
