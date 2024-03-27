const { db } = require('@vercel/postgres');
const {
  users,
  products,
  ratings,
  product_categories,
  categories,
} = require('../src/app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`DO $$ BEGIN
      CREATE TYPE yes_no AS ENUM ('Y','N');
      EXCEPTION WHEN duplicate_object THEN NULL; END $$;`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        user_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        is_seller yes_no NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (user_id, name, email, password, is_seller)
        VALUES (${user.user_id}, ${user.name}, ${user.email}, ${user.password}, ${user.is_seller})
        ON CONFLICT (user_id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedProducts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "products" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS products (
    product_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_url VARCHAR(255),
    user_id UUID NOT NULL
  );
`;

    console.log(`Created "products" table`);

    // Insert data into the "products" table
    const insertedProducts = await Promise.all(
      products.map(
        (product) => client.sql`
        INSERT INTO products (product_id, name, description, image_url, user_id)
        VALUES (${product.product_id}, ${product.name}, ${product.description}, ${product.image_url}, ${product.user_id})
        ON CONFLICT (product_id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedProducts.length} products`);

    return {
      createTable,
      invoices: insertedProducts,
    };
  } catch (error) {
    console.error('Error seeding products:', error);
    throw error;
  }
}

async function seedRatings(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "ratings" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS ratings (
        rating_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        rating FLOAT NOT NULL,
        review TEXT NOT NULL,
        date DATE NOT NULL,
        product_id UUID NOT NULL
      );
    `;

    console.log(`Created "ratings" table`);

    // Insert data into the "ratings" table
    const insertedRatings = await Promise.all(
      ratings.map(
        (rating) => client.sql`
        INSERT INTO ratings (rating_id, rating, review, date, product_id)
        VALUES (${rating.rating_id}, ${rating.rating}, ${rating.review}, ${rating.date}, ${rating.product_id})
        ON CONFLICT (rating_id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedRatings.length} ratings`);

    return {
      createTable,
      customers: insertedRatings,
    };
  } catch (error) {
    console.error('Error seeding ratings:', error);
    throw error;
  }
}

async function seedCategories(client) {
  try {
    // Create the "categories" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS categories (
        category_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        tag VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "categories" table`);

    // Insert data into the "categories" table
    const insertedCategories = await Promise.all(
      categories.map(
        (category) => client.sql`
        INSERT INTO categories (category_id, tag)
        VALUES (${category.category_id}, ${category.tag})
        ON CONFLICT (category_id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedCategories.length} categories`);

    return {
      createTable,
      revenue: insertedCategories,
    };
  } catch (error) {
    console.error('Error seeding categories:', error);
    throw error;
  }
}

async function seedProductCategories(client) {
  try {
    // Create the "product categories" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS product_categories (
        product_id UUID NOT NULL,
        category_id UUID NOT NULL
      );
    `;

    console.log(`Created "product categories" table`);

    // Insert data into the "product categories" table
    const insertedProductCategories = await Promise.all(
      product_categories.map(
        (pc) => client.sql`
        INSERT INTO product_categories (product_id, category_id)
        VALUES (${pc.product_id}, ${pc.category_id})
        ;
      `,
      ),
    );

    console.log(`Seeded ${insertedProductCategories.length} product categories`);

    return {
      createTable,
      revenue: insertedProductCategories,
    };
  } catch (error) {
    console.error('Error seeding product categories:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedRatings(client);
  await seedProducts(client);
  await seedCategories(client);
  await seedProductCategories(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
