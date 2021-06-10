import http from "../http-common"

class UserDataService{
    create(data){
        return http.post("/users", data)
    }
    update(id, data){
        return http.put(`/users/${id}`, data)
    }
    get(id){
        return http.get(`/users/${id}`)
    }
}

export default new UserDataService();