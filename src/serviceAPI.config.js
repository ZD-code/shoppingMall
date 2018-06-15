const BASEURL = ' https://www.easy-mock.com/mock/5b19eb8c966c7b5e64d9cb71/shoppingMall/';
const LOCALURL = 'http://localhost:8080/'
const URL = {
    getShoppingMallInfo: BASEURL + 'index',
    getGoodsInfo: BASEURL + 'getGoodsInfo',
    registerUser: LOCALURL + 'register'
}

module.exports = URL;