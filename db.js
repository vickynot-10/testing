function getUser(id) {
  const conn = db.connect();
  return conn.query("SELECT * FROM users WHERE id = ?", id);
}

function saveUser(data) {
  const conn = db.connect();
  conn.query("INSERT INTO users SET ?", data);
  return true;
}
