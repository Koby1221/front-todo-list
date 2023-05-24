import axios from 'axios';
axios.defaults.baseURL = `http://localhost:3060`;
const apiRequest = async (path, method, databody) => {
    try {
        let options = {
            url:path,
            method: method,
            data: databody
        }
        let res = await axios(options);
        return res.data
    }
    catch (err) {
        throw err;
    }
}
export default apiRequest;


