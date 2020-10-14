const RoutesService = {
  getAllItems(knex, tableName) {
    return knex.from(tableName).select('*');
  },
  getItemById(knex, tableName, id) {
    return knex
      .from(tableName)
      .select('*')
      .where(`${tableName}.id`, id)
      .first();
  },
  insertItem(knex, tableName, newItem) {
    return knex
      .insert(newItem)
      .into(tableName)
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  getCommentsForItem(knex, tableName, id) {
    return knex
      .from(`${tableName} AS comm`)
      .select(
        'comm.id',
        'comm.author_id',
        'comm.review_id',
        'comm.posted_on',
        'comm.body'
      ).where('comm.review_id', id);
  }
  //updateItem(knex, db, newItem) {},
  //deleteItem(knex, db, id) {}
};


module.exports = RoutesService;