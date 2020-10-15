const RoutesService = {
  getAllReviews(knex) {
    return knex
      .select('*')
      .from('coffee_review')
      .leftJoin('user_data', 'user_data.id', `coffee_review.author_id`)
      .leftJoin('roaster', 'roaster.id', `coffee_review.roaster_id`);
  },
  getAllReviewsRefactor(knex) {
    return knex
      .from('coffee_review AS rev')
      .select(
        'rev.*',
        'roaster.name',
        'usr.nickname'
      )
      .leftJoin('user_data AS usr', 'rev.author_id', 'usr.id')
      .leftJoin('roaster', 'rev.roaster_id', 'roaster.id');
  },
  getAllComments(knex) {
    return knex
      .select(
        'comment.*',
        'usr.nickname'
      )
      .from('comment')
      .leftJoin('user_data AS usr', 'comment.author_id', 'usr.id');
  },
  getItemById(knex, tableName, id) {
    return knex
      .from(tableName)
      .select('*')
      .where(`${tableName}.id`, id)
      .leftJoin('user_data', 'user_data.id', `${tableName}.author_id`)
      .leftJoin('roaster', 'roaster.id', `${tableName}.roaster_id`)
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
      .select('*')
      .where('comm.review_id', id);
  },
  //updateItem(knex, db, newItem) {},
  //deleteItem(knex, db, id) {}
};


module.exports = RoutesService;