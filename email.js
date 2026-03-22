function sendWelcome(user) {
  mailer.send(user.email, "Welcome!");
}

function sendReset(user) {
  mailer.send(user.email, "Reset your password");
}
