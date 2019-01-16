/* call firestore instance from the connecToDb file*/
const connectToFireStore = require('./connectToDb.js');
const firestore = connectToFireStore.firestore;

/* Define the collection */
var collection = firestore.collection('Skincare')

/* Getting multiple documents from a collection */
var query = collection.get().then( snapShot => {
	snapShot.forEach( doc => {
		console.log( doc.id, '=>', doc.data());
	});
}).catch(err => {
	console.log("There was an error", err)
});

	


	


