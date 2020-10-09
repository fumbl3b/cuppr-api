const RoutesService = {
  getAllItems(knex, db) {
    return knex.select('*').from(db);
  },
  insertItem(knex, db, newItem) {
    return knex
      .insert(newItem)
      .into(db)
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  }
};

module.exports = RoutesService;