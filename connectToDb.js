/* Define firestore from lib module */
const Firestore = require('@google-cloud/firestore')

/* Declare database parameres. 
	 Can be found at the firebase console by clicking on </>
*/

const _projectId = //your prj id
const keyFile = "location of file"


/* create a new instace of your db */
const firestore = new Firestore({
	projectId: _projectId,
	keyFilename: keyFile,
});

/* call the document from your firestore collection 
	 ex: docName = 'Collectionname/documentName'*/
const docName = //your documents name
const document = firestore.doc(docName);

/* Enter data into the document */
document.set({
	CollectionName: 'Hello',
}).then(() => {
	console.log('item has been appended')
});

	




