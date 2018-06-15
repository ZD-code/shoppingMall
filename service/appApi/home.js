const Router = require('koa-router')

let router = new Router();


router.get('/home', async ctx => {
    ctx.body = '这是用户操作首页'
})

module.exports = router;