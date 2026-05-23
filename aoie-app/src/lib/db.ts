import "@/lib/dns";
import mongoose from "mongoose";

import { env } from "@/config/env";

type MongooseCache = {
  connection: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache ?? {
  connection: null,
  promise: null,
};

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

export async function connectDB() {
  if (cached.connection) {
    return cached.connection;
  }

  if (!env.MONGODB_URI) {
    throw new Error("MONGODB_URI is missing. Please add it to .env.local.");
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(env.MONGODB_URI, {
      dbName: "aoie-studio",
      bufferCommands: false,
    });
  }

  cached.connection = await cached.promise;

  return cached.connection;
}