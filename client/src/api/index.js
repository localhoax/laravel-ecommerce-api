import axios from 'axios'

export default axios.create({
    baseURL: "http://test4now.tk/",
    timeout: 10000,
});
