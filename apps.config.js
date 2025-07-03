module.exports = {
  apps : [
    {
      name: "App",
      cwd: "/var/www/html/webapp",
      script: "npm run dev || (rm -rf node_modules && npm install && npm run dev)"
    }
  ]
}
