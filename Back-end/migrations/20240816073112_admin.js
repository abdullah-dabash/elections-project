exports.up = function(knex) {
    return knex.schema.createTable('admin', function(table) {
        table.increments('id').primary(); // Primary key
        table.string('password').notNullable(); // Password
        table.string('email').notNullable().unique(); // Email, unique to ensure no duplicates
        table.timestamps(true, true); // Created at and updated at timestamps
    });
};


exports.down = function(knex) {
    return knex.schema.dropTable('admin');
};