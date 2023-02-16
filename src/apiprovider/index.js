import axios from 'axios';

const url = "http://localhost:8080/";

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*'
}

const $axios = axios.create({
    baseURL: url,
    headers: headers,
})

class ApiProvider {

    auth(login, password) {
        return $axios.post("user", {login, password})
            .then((res) => {
                document.cookie = `token=${JSON.stringify(res.data)}`;
            }).catch((e) => {
                return e.response;
            });
    }
}

export default new ApiProvider();
