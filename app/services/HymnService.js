let SQLite = require('react-native-sqlite-storage');
let db = SQLite.openDatabase({name: 'hymns.db', createFromLocation: 1});
import header from '../assets/header';
import footer from '../assets/footer';

export default function getHymn(id) {
    const query = `SELECT * FROM hymns WHERE _id=${id}`;
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(query, [], (tx, results) => {
                let body = results.rows.item(0).html;
                resolve(header + body + footer);
            }, function (tx, error) {
                reject(error)
            })
        });
    });
}