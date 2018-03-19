const Sequelize = require('sequelize')
const conn = new Sequelize(process.env.database_url || 'postgres://localhost/acme_redux_react')

const Users = conn.define('users', {
    name: {
        type: Sequelize.STRING
    }
})

const sync = ()=> {
    return conn.sync({ force:true })
}

const seed = ()=> {
    return Promise.all([
        Users.create({name: 'moe'}),
        Users.create({name: 'larry'}),
        Users.create({name: 'curly'})
    ])
}

module.exports = {
    sync, 
    seed,
    models: {
        Users
    }
}