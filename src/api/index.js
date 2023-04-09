import request from "../utils/request";

/**
 * login api
 */
export const getLogin = (data) =>{
    return request({method: 'post', url: '/api/v1/admin/login', data})
};

/**
 * register api
 */
export const getRegister = (data) =>{
    return request({method: 'post', url: '/api/v1/admin/register', data})
};

/**
 * 获取members列表数据的api
 */
export const getMember = (data) =>{
    return request({method: 'get', url: '/api/v1/member/find', data})
}

/**
 * member info修改的api
 */
export const changeMemberInfo = (data) =>{
    return request({method: 'get', url: '/api/v1/member/update', data})
}

/**
 * delete api
 */
export const deleteMember = (data) =>{
    return request({method: 'get', url: '/api/v1/member/delete', data})
}

/**
 * admin list api
 */
export const getAdmin = (data) =>{
    return request({method: 'get', url: '/api/v1/member/search', data})
}

/**
 * admin info edit api
 */
export const updateAdmin = (data) =>{
    return request({method: 'get', url: '/api/v1/member/edit', data})
}

/**
 * photo display api
 */
export const displayImage = (data) =>{
    return request({method: 'get', url: '/api/v1/admin/display', data})
}