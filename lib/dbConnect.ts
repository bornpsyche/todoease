import mongoose from "mongoose";

const DB_HOST = process.env.DB_HOST;
let alreadyDone = false;

declare global {
  var mongoose: any;
}

if (!DB_HOST) {
  throw new Error(
    "Please define the DB_HOST environment variable inside .env.local"
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
// let cached = global.mongoose

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null }
// }

async function dbConnect() {
  if (alreadyDone) {
    return;
  }
  const opts = {
    dbName: "TodoEase",
    bufferCommands: false,
  };
  alreadyDone = true;
  await mongoose.connect(DB_HOST as string, opts);
  // if (cached.conn) {
  //   return cached.conn
  // }

  // if (!cached.promise) {
  //   const opts = {
  //     dbName: "TodoEase",
  //     bufferCommands: false
  //   }

  //   cached.promise = mongoose.connect(DB_HOST as string, opts).then((mongoose) => {
  //     return mongoose
  //   })
}

// try {
//   cached.conn = await cached.promise
// } catch (e) {
//   cached.promise = null
//   throw e
// }

// return cached.conn

export default dbConnect;
