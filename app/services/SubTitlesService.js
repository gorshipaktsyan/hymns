let SQLite = require('react-native-sqlite-storage');
let db = SQLite.openDatabase({name: 'hymns.db', createFromLocation: 1});

export default function getSubTitles(titleId) {
    const query = `SELECT * FROM subtitles WHERE title=${titleId}`;
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(query, [], (tx, results) => {
                let length = results.rows.length;
                let subTitles = [];
                for(let i = 0; i < length; i++) {
                    subTitles.push(results.rows.item(i))
                }
                resolve(subTitles);
            }, function (tx, error) {
                reject(error)
            })
        });
    });
}
