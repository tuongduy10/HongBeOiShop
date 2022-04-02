var MongoClient = require('mongodb').MongoClient;

module.exports.home = function (req, res) {
    MongoClient.connect(process.env.dbUrl, function (err, db) {
        if (err) throw err;
        var dbo = db.db(process.env.dbName);
        dbo.collection("Perfume").find({}).toArray(function (err, result) {
            if (err) throw err;

            res.json({
                status: "success",
                data: result,
            })

            db.close();
        });
    });
}