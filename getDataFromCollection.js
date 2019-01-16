/* call firestore instance from the connecToDb file*/
const connectToFireStore = require('./connectToDb.js');
const firestore = connectToFireStore.firestore;

/* Define the document you want to get from a collection */
var collectionDoc = firestore.collection('Skincare').doc('test');

var getData = collectionDoc.get().then( doc => {
	if( !doc.exists) {
		console.log('document does not exists');
	}
	else {
		console.log('Document Data', doc.data());
	}
}).catch(err => {
	console.log('an error has occured', err);	
}); 
	


	


