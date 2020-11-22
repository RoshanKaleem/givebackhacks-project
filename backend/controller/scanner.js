
var async = require('async');

/**
 * Require files
 */
var scannerModel = require('./scanner-model');
// ----------------------------------------------------------------------------
exports.scanUrl = function (req, res) {
    // console.log(req)

    // let params = req.body;
    // let url = params.url;
    // let maxChildren = params.maxChildren;
    // let recurse = params.recurse;
    // let contextName = params.contextName;
    // let subtreeOnly = params.subtreeOnly;

    let url = req.body.uri;// 'http://www.itsecgames.com'

    let maxChildren = 10;
    let recurse = false;
    let contextName = 'Default';
    let subtreeOnly = true;

    console.log("Url:", url);
    console.log("maxChildren:", maxChildren);
    console.log("recurse:", recurse);
    console.log("contextName:", contextName);
    console.log("subtreeOnly:", subtreeOnly);
    scannerModel.scanUrl(
        url,
        maxChildren,
        recurse,
        contextName,
        subtreeOnly,
        function (err, data) {
            if (err) {
                res.status(err.statusCode);
                res.send(err.error);
            } else {
                // res.status('200');
                // console.log('Data:', data);
                // console.log(typeof data);
                // removeContext("temp")
                res.send(
                    {
                        status: 'success',
                        message: 'Scanning Was Successful',
                        data: data

                    }
                );
            }
        }
    );
}
