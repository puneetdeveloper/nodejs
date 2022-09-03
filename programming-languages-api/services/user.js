const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
      `SELECT id, name, email 
      FROM users LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};
  
    return {
      data,
      meta
    }
  }
  async function create(userDetails){
    console.log(userDetails);
      const result = await db.query('insert into users(name,email) values ("' +userDetails.name+ '","' +userDetails.email+ '")');
    
      let message = 'Error in creating programming language';
    
      if (result.affectedRows) {
        message = 'User created successfully';
      }
    
      return {message};
    }

    async function update(id, userDetails){
      const result = await db.query('UPDATE users SET name="'+userDetails.name+'", email="'+userDetails.email+'" WHERE id="'+id+'"');
    
      let message = 'Error in updating programming language';
    
      if (result.affectedRows) {
        message = 'Programming language updated successfully';
      }
    
      return {message};
    }  
    async function remove(id){
      const result = await db.query(
        `DELETE FROM users WHERE id=${id}`
      );
    
      let message = 'Error in deleting programming language';
    
      if (result.affectedRows) {
        message = 'Programming language deleted successfully';
      }
    
      return {message};
    }
  module.exports = {
    getMultiple,
    create,
    update,
    remove
  }