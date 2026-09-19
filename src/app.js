// Simple starter application.
// It reads the application port from environment configuration.

const APP_PORT = Number(process.env.APP_PORT) || 3000;

function main() {
  const message = "app is running";
  console.log(message);
  console.log("listening on port " + APP_PORT);
}

main();