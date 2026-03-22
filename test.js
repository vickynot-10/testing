function fetchUser(id) {
  const user = db.query(id);
  return user;
}

function sendEmail(to, message) {
  mailer.send(to, message);
}
