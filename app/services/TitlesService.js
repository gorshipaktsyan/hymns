let SQLite = require('react-native-sqlite-storage');
let db = SQLite.openDatabase({name: 'hymns.db', createFromLocation: 1});

export default function getTitles() {
    const query = `SELECT * FROM titles`;
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(query, [], (tx, results) => {
                let length = results.rows.length;
                let titles = [];
                for(let i = 0; i < length; i++) {
                   titles.push(results.rows.item(i))
                }
                resolve(titles);
            }, function (tx, error) {
                reject(error)
            })
        });
    });
}
