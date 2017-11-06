let SQLite = require('react-native-sqlite-storage');
let db = SQLite.openDatabase({name: 'hymns.db', createFromLocation: 1});

export default function getHymns(subTitleId) {
    const query = `SELECT * FROM hymns WHERE subtitle=${subTitleId}`;
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(query, [], (tx, results) => {
                let length = results.rows.length;
                let hymns = [];
                for(let i = 0; i < length; i++) {
                    let item = results.rows.item(i);
                    item.key = item._id;
                    hymns.push(item)
                }
                resolve(hymns);
            }, function (tx, error) {
                reject(error)
            })
        });
    });
}