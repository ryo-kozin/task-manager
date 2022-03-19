//CRUD create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectId();
// console.log(id);
// console.log(id.getTimestamp());
// console.log(id.id);
// console.log(id.id.length);
// console.log(id.toHexString());
// console.log(id.toHexString().length);

MongoClient.connect(
	connectionURL,
	{ useNewUrlParser: true },
	(error, client) => {
		if (error) {
			return console.log('Unable to connect to database!');
		}

		console.log('Connected correctly!');

		const db = client.db(databaseName);

		// db.collection('tasks')
		// 	.deleteOne({
		// 		discription: 'Clean house',
		// 	})
		// 	.then((result) => {
		// 		console.log(result);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});

		// db.collection('users')
		// 	.deleteMany({
		// 		age: 25,
		// 	})
		// 	.then((result) => {
		// 		console.log(result);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});

		// db.collection('tasks')
		// 	.updateMany(
		// 		{
		// 			completed: false,
		// 		},
		// 		{
		// 			$set: {
		// 				completed: true,
		// 			},
		// 		}
		// 	)
		// 	.then((result) => {
		// 		console.log(result.modifiedCount);
		// 		console.log(result);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		//     });

		// const updatePromise = db
		// 	.collection('users')
		// 	.updateOne(
		// 		{
		// 			_id: new ObjectID('622862ef9a3ce47880aa845a'),
		// 		},
		// 		{
		// 			$set: {
		// 				name: 'Mike',
		// 			},
		// 			$inc: {
		// 				age: 1,
		// 			},
		// 		}
		// 	)
		// 	.then((result) => {
		// 		console.log(result);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});

		// updatePromise
		// 	.then((result) => {
		// 		console.log(result);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});

		// db.collection('users').findOne(
		// 	// { name: 'Ryotaro', age: 23 },
		// 	{ _id: new ObjectID('622862ef9a3ce47880aa845a') },
		// 	(error, user) => {
		// 		if (error) {
		// 			return console.log('Unable to fetch');
		// 		}

		// 		console.log(user);
		// 	}
		// );

		// db.collection('users')
		// 	.find({ age: 23 })
		// 	.toArray((error, users) => {
		// 		console.log(users);
		// 	});

		// db.collection('users')
		// 	.find({ age: 23 })
		// 	.count((error, count) => {
		// 		console.log(count);
		// 	});

		// db.collection('users').insertOne(
		// 	{
		// 		_id: id,
		// 		name: 'Ryotaro',
		// 		age: 23,
		// 	},
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log('Unable to insert user');
		// 		}

		// 		console.log(result.ops);
		// 	}
		// );

		// db.collection('users').insertMany(
		// 	[
		// 		{
		// 			name: 'Ryotaro',
		// 			age: 23,
		// 		},
		// 		{
		// 			name: 'Taro',
		// 			age: 28,
		// 		},
		// 	],
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log('Unable to insert user');
		// 		}

		// 		console.log(result.ops);
		// 	}
		// );

		// db.collection('tasks').insertMany(
		// 	[
		// 		{
		// 			discription: 'Clean house',
		// 			completed: true,
		// 		},
		// 		{
		// 			discription: 'Wash dishes',
		// 			completed: false,
		// 		},
		// 	],
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log('Unable to insert tasks');
		// 		}

		// 		console.log(result.ops);
		// 	}
		// );
	}
);
