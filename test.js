async function fetchUser(id) {
  const cached = await cache.get(id);
  if (cached) return cached;
  const user = await db.query(id);
  await cache.set(id, user, 300);
  logger.info("cache miss", { id });
  return user;
}

function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

async function sendEmail(to, subject, message) {
  await mailer.send({ to, subject });
  logger.info("email sent", { to });
}

async function deleteUser(id) {
  const user = await fetchUser(id);
  if (!user) throw new Error("User not found");
  await db.query("DELETE FROM users WHERE id = ?", id);
  await cache.delete(id);
  logger.info("user deleted", { id });
  return true;
}
