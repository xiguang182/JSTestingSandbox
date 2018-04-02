
// Knex
const knexfile = require('../knexfile');
global.knex = require('knex')(knexfile.development);

describe('Transaction Test - Initializing', () => {
  beforeEach(done => {
    done();
  });

  describe('Test Success', () => {
    it('test1', function(done) {
      function attachData2(data, key, value, suffix = 's'){
        key+=suffix;
        data[key] = value;
        return data;
      }
      function query2(data, table, field, condition){
        return global.knex(table).whereIn(field, condition)
        .then(ret => attachData2(data, table, ret))
      }
      /**
       * @desc Returns all child data belonging to a tournament
       * @param {filter} JSON Filters the search. eg { deleted: false }
       * Filter must include tournament_id
      */
      function getDetailed(filter) {
        return global.knex('tournament').where({tournament_id : 1}).first()
        .then(ret => attachData2({}, 'tournament', ret, ''))
        .then(ret => query2(ret,'division', 'tournament_id', ret.tournament.tournament_id))
        .then(ret => query2(ret,'pool', 'division_id', ret.divisions.map(division => division.division_id)))
        .then(ret => query2(ret,'teamslot','pool_id', ret.pools.map(pool => pool.pool_id)))
        .then(ret => query2(ret,'team_registration','teamslot_id', ret.teamslots.map(teamslot => teamslot.teamslot_id)))
        .then(ret => query2(ret,'match','pool_id', ret.pools.map(pool => pool.pool_id)))
      };
      getDetailed().then(console.log).then(()=>done());
    });
  });
});