async function getUser(id) {
  const cached = await cache.get(`user_${id}`);
  if (cached) return cached;
  const conn = await db.connect();
  const user = await conn.query("SELECT * FROM users WHERE id = ?", id);
  await cache.set(`user_${id}`, user, 600);
  return user;
}

async function saveUser(data) {
  if (!data.email || !data.password) {
    throw new Error("Email and password required");
  }
  const conn = await db.connect();
  await conn.query("INSERT INTO users SET ?", data);
  logger.info("user saved", { email: data.email });
  return true;
}
