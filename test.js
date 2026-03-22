function fetchUser(id) {
  const user = db.query(id);
  return user;
}
