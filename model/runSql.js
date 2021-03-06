// vim: set ft=javascript:


const mysql = require('mysql');
const logger = require('./logger.js');


const runSql = async (query) => {

  let sql_results = new Promise((resolve, reject) => {

    try {

      logger.debug(`Getting from database with query: <${query}>.`);

      // TODO: curry or import this
      let connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: process.env.CLICKMER_MYSQL_PASSWORD,
        database: 'clickmer'
      });

      connection.query(query, function(error, results, fields) {
        logger.debug(`error: <${error}>, results: <${JSON.stringify(results)}>, fields: <${JSON.stringify(fields)}>.`);
        resolve(results);
      });

    } catch(error) {

      logger.error('Got an error running SQL:', error);
      reject(null);

    };

  });

  return sql_results;

};


module.exports = runSql;
