//存储token
export const setToken = (token) => {
    sessionStorage.setItem("TOKEN" , token)
}

//获取token
export const getToken = () => {
    return sessionStorage.getItem("TOKEN")
}

//删除token
export const removeToken = () => {
    sessionStorage.removeItem("TOKEN")
}