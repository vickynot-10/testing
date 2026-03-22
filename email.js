async function sendWelcome(user) {
  await mailer.send(user.email, "Welcome!");
  logger.info("welcome email sent", { user: user.id });
}

async function sendReset(user, token) {
  await mailer.send(user.email, `Reset: ${token}`);
  logger.info("reset email sent", { user: user.id });
}
