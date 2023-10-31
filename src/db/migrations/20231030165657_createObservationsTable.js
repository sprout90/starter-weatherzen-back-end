
exports.up = function(knex) {

    const myvar = knex.client.connectionSettings 
    console.log(myvar)
    return knex.schema.createTable("observations", (table) => {
        table.increments("observation_id").primary();   
        table.decimal("latitude", null);
        table.decimal("longitude", null);
        table.integer("sky_condition");
        table.timestamps(true, true);
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable("observations");
};
