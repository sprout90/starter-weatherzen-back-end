const knex = require("../db/connection");

function create(newObservation) {
  return knex("observations").insert(newObservation).returning("*");
}

function update(observation_id, updatedObservation) {
  return knex("observations")
    .where({ observation_id: observation_id})
    .update(updatedObservation, "*")
}

async function list(){
  return knex("observations").select("*")
}

async function read(observation_id){
  return knex("observations").select("*").where({ observation_id: observation_id}).first();
}

module.exports = {
  create,
  list,
  read,
  update,
};