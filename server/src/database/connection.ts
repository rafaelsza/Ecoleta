import knex from 'knex';

const connection = knex({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : '',
        database : 'nlw_aula'
    }
})

export default connection;



// Migrations = Histórico do banco de dados