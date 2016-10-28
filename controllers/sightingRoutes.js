const sightingCtrl = require( "./sightingCtrl" );

module.exports = app => {
  app.post("/api/sighting", sightingCtrl.postSighting);
  app.get("/api/sighting", sightingCtrl.getSighting );
  app.put("/api/sighting/:sightingId/price", sightingCtrl.setPrice );
  app.get("/api/sighting/search", sightingCtrl.searchSighting );
  app.put("/api/sighting/:sightingId", sightingCtrl.updateSighting );
  app.delete("/api/sighting/:sightingId", sightingCtrl.deleteSighting );
};
