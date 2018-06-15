const Koa = require('koa')
const mongoose = require('mongoose');
const { connect, initSchemas } = require('./database/init.js')
const Router = require('koa-router');
const bodyparser = require('koa-bodyparser')
const cors = require('koa2-cors')

const app = new Koa();
let router = new Router();
let user = require('./appApi/User.js')

app.use(bodyparser())
app.use(cors());




router.use('/user', user.routes(), user.allowedMethods()) // /user  父路由  加载子路由 

app.use(router.routes(), router.allowedMethods());
(async() => {
    await connect()
    initSchemas()
        // const User = mongoose.model('User')

    // let oneUser = new User({
    //     userName: 'zd',
    //     password: '222222'
    // })

    // oneUser.save().then(() => {
    //     console.log('insert success!')
    // })

    // let users = await User.findOne({}).exec()

    // console.log('------')
    // console.log(users)
    // console.log('------')
})()

app.use(async ctx => {
    ctx.body = '<h1>hello koa2</h1>'
})

app.listen(3000, () => {
    console.log('success')
})