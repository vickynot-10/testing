async function validateToken(token) {
  try {
    const decoded = await jwt.verify(token);
    await cache.set(`token_${token}`, decoded, 300);
    return decoded;
  } catch (err) {
    logger.error("invalid token", { err });
    throw new Error("Invalid token");
  }
}

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}async function validateToken(token) {
  try {
    const decoded = await jwt.verify(token);
    await cache.set(`token_${token}`, decoded, 300);
    return decoded;
  } catch (err) {
    logger.error("invalid token", { err });
    throw new Error("Invalid token");
  }
}

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}
