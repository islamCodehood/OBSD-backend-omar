<<<<<<< HEAD
import "reflect-metadata";
import { DataSource } from "typeorm";
import { config } from 'dotenv';
import { Category } from "./entities/Category";
import { Order } from "./entities/Order";
import { OrderLine } from "./entities/OrderLine";
import { Product } from "./entities/Product";


config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host:process.env.DB_HOST,
  port: +process.env.DB_PORT!,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [Category, Order, OrderLine, Product],
  migrations: [],
  subscribers: [],
=======
import "reflect-metadata";
import { DataSource } from "typeorm";
import { config } from 'dotenv';
import { Category } from "./entities/Category";
import { Order } from "./entities/Order";
import { OrderLine } from "./entities/OrderLine";
import { Product } from "./entities/Product";


config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host:process.env.DB_HOST,
  port: +process.env.DB_PORT!,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [Category, Order, OrderLine, Product],
  migrations: [],
  subscribers: [],
>>>>>>> a31134411f04b6fc26e2b6bc2df67123841ebd68
});