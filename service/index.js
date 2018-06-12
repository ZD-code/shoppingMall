const Koa = require('koa')
const mongoose = require('mongoose')
const { connect, initSchemas } = require('./database/init.js')
const md5 = require('md5-node')

const app = new Koa();
(async() => {
    await connect()
    initSchemas()
    const User = mongoose.model('User')

    let oneUser = new User({
        userName: 'brand',
        password: '111111'
    })

    oneUser.save().then(() => {
        console.log('insert success!')
    })

    let users = await User.findOne({}).exec()

    console.log('------')
    console.log(users)
    console.log('------')
})()

app.use(async ctx => {
    ctx.body = '<h1>hello koa2</h1>'
})

app.listen(3000, () => {
    console.log('success')
})