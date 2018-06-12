const mongoose = require('mongoose');
const db = 'mongodb://localhost/'
const glob = require('glob')
const { resolve } = require('path')

exports.connect = () => {

    let maxConnectTimes = 0;
    mongoose.connect(db);

    return new Promise((resolve, reject) => {
        mongoose.connection.on('disconnected', () => {
            console.log('===数据库断开链接====')
            if (maxConnectTimes < 3) {
                maxConnectTimes++;
                mongoose.connect(db);
            } else {
                reject()
                throw new Error('数据库出现问题，请维修，……')
            }
        })

        mongoose.connection.on('error', err => {

            console.log('数据库错误')
            if (maxConnectTimes < 3) {
                maxConnectTimes++;
                mongoose.connect(db)
            } else {
                reject(err)
                throw new Error('数据库出错，……')
            }
        })

        mongoose.connection.once('open', () => {
            console.log('MongoDB connected successfully !')
            resolve();
        })
    })
}


exports.initSchemas = () => {
    glob.sync(resolve(__dirname, './schema/', '**/*.js')).forEach(require)
}