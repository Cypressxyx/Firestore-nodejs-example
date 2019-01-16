/* call firestore instance from the connecToDb file*/
const connectToFireStore = require('./connectToDb.js');
const firestore = connectToFireStore.firestore;


/* Define Collection from your firestore DB and docmument*/
const collectionName = 'Skincare';
const docName = 's'

firestore.collection(collectionName).doc(docName).delete().then( function() { 
	console.log('Document Deleted')
	}).catch(err => {
		console.log("there was an error in deleteind the file:", err)
});
		


