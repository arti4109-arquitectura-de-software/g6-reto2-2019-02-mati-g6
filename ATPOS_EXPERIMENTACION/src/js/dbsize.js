/**
 * Provides the size of database in bytes
 * @param callback callback(size, null) or callback(null, error)
 */
var DB_NAME = 'atpos-local';
var TABLE_NAME = 'ventas';

var size = function(callback){
    if(this._db != null){
        var size = 0;

        var transaction = this._db.transaction([DB_NAME])
            .objectStore(DB_NAME)
            .openCursor();

        transaction.onsuccess = function(event){
            var cursor = event.target.result;
            if(cursor){
                var storedObject = cursor.value;
                var json = JSON.stringify(storedObject);
                size += json.length;
                cursor.continue();
            }
            else{
                callback(size,null);
            }
        }.bind(DB_NAME);
        transaction.onerror = function(err){
            callback(null,err);
        }
    }
    else{
        callback(null,null);
    }
};
