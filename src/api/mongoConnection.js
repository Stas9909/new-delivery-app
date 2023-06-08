// import { MongoClient } from 'mongodb';

// export default async function handler(req, res) {
//   if (req.method === 'GET') {
//     const client = new MongoClient('mongodb+srv://stasprykhodko1:Hwsvg4KhDuJKOoKC@cluster0.rmymtql.mongodb.net/?retryWrites=true&w=majority');
//     const dbName = process.env.DB_NAME || 'shop-goods';
//     const db = client.db(dbName);

//     try {
//       await client.connect();
//       // if (client.isConnected()) {
//       //   console.log('Connected to MongoDB');
//       // }
//     } catch (err) {
//       res.status(500).json({ message: 'Could not connect to db' })
//       return;
//     }

//     try {
//       const goodsCollection = await db.collection('ninja-sushi')
//       // const collectionKey = req.query.collection;
//       // const goodsCollection = await db.collection(collectionKey)
//         .find()
//         // .sort({ id: 1 })
//         .toArray();
//       res.status(200).json(goodsCollection);
//     } catch (err) {
//       res.status(500).json({ message: 'Could not get data from db' })
//       return;
//     } finally {
//       client.close();
//     }
//   }
// }