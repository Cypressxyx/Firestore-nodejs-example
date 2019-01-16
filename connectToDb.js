/* Define firestore from lib module */
const Firestore = require('@google-cloud/firestore')

/* Declare database parameres. 
	 Can be found at the firebase console by clicking on </>
*/

const _projectId = //your prj id
const keyFile = //"location of file"


/* create a new instace of your db */
const firestore = new Firestore({
	projectId: _projectId,
	keyFilename: keyFile,
	timestampsInSnapshots: true,
});

/* Export the firestore const to use in different files if wanted 
 * Global variables like this is generally a  bad programming method
*/

exports.firestore = firestore;
