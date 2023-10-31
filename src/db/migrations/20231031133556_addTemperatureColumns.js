
exports.up = function(knex) {
    return knex.schema.table("observations", (table) => {
        table.decimal("air_temperature");  // Add a new column
        table.string("air_temperature_unit", 10) //add a new column
      });
};

exports.down = function(knex) {
    return knex.schema.table("observations", (table) => {
        table.dropColumn("air_temperature");  // remove column
        table.dropColumn("air_temperature_unit") // remove column
      });
};
