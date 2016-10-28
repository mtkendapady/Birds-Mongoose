const Sighting = require("./Sighting");

module.exports = {
  postSighting( req, res ) {
    new Sighting( req.body ).save( ( err, sighting ) => {
      if( err ) {
        return res.status( 500 ).json(err);
      }

      return res.status( 201 ).json( sighting );
    } );
  }

  , getSighting( req, res ) {
    Sighting.find( {}, (err, sighting) => {
      if(err) {
        return res.status(500).json( err );
      }
      return res.status(200).json( sighting );
    });
  }

  , updateSighting( req, res ) {
    Sighting.findByIdAndUpdate( req.params.sightingId, req.body, ( err, updatedSighting ) => {
      if( err ) {
        return res.status( 500 ).json( err );
      }
      Sighting.findbyId( req.params.sightingId, (err, sighting ) => {
        if (err) {
          return res.status( 500 ).json( err );
        }
        return res.status( 200 ).json( sighting );
      } );
    });
  }

  , deleteSighting( req, res ) {
    Sighting.findByIdAndRemove( req.params.sightingId, ( err, deletedSighting ) => {
      if(err) {
        return res.status( 500 ).json( err );
      }
      return res.status( 200 ).json( deletedSighting );
    } );
  }
  // , setPrice( req, res ) {
  //   Sighting.findByIdAndUpdate( req.params.sightingId, { $set: { price: req.body.price } }, ( err, sighting ) => {
  //     if ( err ) {
  //       return res.status( 500 ).json( err );
  //     }
  //     return res.status( 200 ).json( {msg: "Success"} );
  //   });
  // }
};
