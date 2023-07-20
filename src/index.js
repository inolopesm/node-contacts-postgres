const { Client } = require("pg");

const config = {
  user: 'postgres',
  password: 'docker',
  host: 'localhost',
  port: 5432,
  database: 'contacts',
};

const main = async () => {
  const command = process.argv[2];

  if (command === "help") {
    console.log("=== CONTACTS CRUD ===")
    console.log("");
    console.log("Commands:");
    console.log("- create");
    console.log("- read");
    console.log("- update");
    console.log("- delete");
    console.log("");
    console.log("Examples:");
    console.log("- node src create matheus 550012341234");
  }

  if (command === "read") {
    const client = new Client(config);
    await client.connect();

    try {
      const { rows } = await client.query('SELECT * FROM "Contact"');
      console.table(rows);
    } finally {
      await client.end();
    }
  }
};

main();
