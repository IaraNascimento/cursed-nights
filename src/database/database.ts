import * as SQLite from 'expo-sqlite';
import { ISheet } from '../models/sheet.model';

const db = SQLite.openDatabase('mydb.db'); // Change the database name

const initiateDB = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS sheets ( ' +
        'id TEXT PRIMARY KEY, ' +
        'isPC INTEGER NOT NULL, ' +
        'title TEXT NOT NULL, ' +
        'race TEXT NOT NULL, ' +
        'clan TEXT, ' +
        'uri TEXT, ' +
        'isActive INTEGER NOT NULL, ' +
        'createdAt TEXT, ' +
        'updatedAt TEXT' +
      ');'
    );
  });
};

const insertSheet = (newSheet: ISheet) => {
  const insertCharacterQuery = `
    INSERT INTO sheets (
      id, isPC, title, race, clan, uri, isActive, createdAt, updatedAt
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
  `;

  db.transaction(tx => {
    tx.executeSql(insertCharacterQuery, [
      newSheet.id,
      newSheet.isPC ? 1 : 0,
      newSheet.title,
      newSheet.race,
      newSheet.clan || null,
      newSheet.uri || null,
      newSheet.isActive ? 1 : 0,
      newSheet.createdAt?.toISOString() || null,
      newSheet.updatedAt?.toISOString() || null,
    ]);
  });
}

const updateSheet = (newSheet: ISheet) => {
  const updateCharacterQuery = `
    UPDATE sheets
      SET isPC = ?, title = ?, race = ?, clan = ?, uri = ?, isActive = ?, updatedAt = ?
      WHERE id = ?;
  `;

  db.transaction(tx => {
    tx.executeSql(updateCharacterQuery, [
      newSheet.isPC ? 1 : 0,
      newSheet.title,
      newSheet.race,
      newSheet.clan || null,
      newSheet.uri || null,
      newSheet.isActive ? 1 : 0,
      newSheet.updatedAt?.toISOString() || null,
      newSheet.id,
    ]);
  });
}

const deleteSheet = (id: string) => {
  const deleteQuery = 'DELETE FROM sheets WHERE id = ?;';

  db.transaction(tx => {
    tx.executeSql(deleteQuery, [id], (_, { rowsAffected }) => {
      if (rowsAffected > 0) {
        console.log(`Row with ID ${id} deleted.`);
      } else {
        console.log('No rows deleted.');
      }
    });
  });
};

export { initiateDB, insertSheet, deleteSheet, updateSheet, db };