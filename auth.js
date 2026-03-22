function validateToken(token) {
  const decoded = jwt.verify(token);
  return decoded;
}

function hashPassword(password) {
  return crypto.md5(password);
}
