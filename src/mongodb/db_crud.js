/**
 * Created by Administrator on 2015/12/13.
 * MongoDB增删改查操作
 */

var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
    var myDB = db.db("mydb");
    myDB.collection("users", function(err, nebulae){
        /*nebulae.find(function(err, items) {
            items.toArray(function(err, itemArr) {
                console.log("Document Array ： ");
                console.log(itemArr);
            });
        });
*/
        //read
        nebulae.findOne({username:"user0"}, function(err, item) {
            console.log("found one : ");
            console.log(item);
        });

        //add
        myDB.createCollection("test", function(err, testCollection) {
            addObject(testCollection, {ngc:'7293', name:"haha",type:'abd', location:'gz'});
            addObject(testCollection, {ngc:'7294', name:"zhang",type:'haha', location:'gz'});
            addObject(testCollection, {ngc:'7295', name:"zhen",type:'test', location:'gz'});
        });

        //update
        myDB.collection("test", function(err, test) {
            test.find({location: "gz"}, function(err, items) {
                items.toArray(function(err, item) {
                    console.log("Before update...");
                    console.log(item);

                    test.update({type: "test", $isolated :1},
                        {$set:{type : "update", updated: true}},
                        {upset : false, multi:true , w:1},
                    function(err, results) {
                        test.find({type:"test"}, function(err, items) {
                            items.toArray(function(err, itemArr) {
                                console.log("After Update: ");
                                console.log(itemArr);
                                db.close();
                            });
                        })
                    })
                }) ;

            });
        });

        //delete
        myDB.collection("test", function(err, test) {
           test.remove({type: "update"}, function(err, results) {
               console.log("Delete : " + results + " documents");
               test.find(function(err, items) {
                   items.toArray(function(err,item) {
                       console.log("After Delete...");
                       console.log(item);
                       db.close();
                   });
               })
           })
        });
    });

});

function addObject(collection , object) {
    collection.insert(object, function(err, result) {
        if (!err) {
            console.log("Inserted : ") ;
            console.log(result);
        }
    });
}
