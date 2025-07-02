module.exports = {
  apps : [
    {
      name: "App",
      cwd: "/var/www/html/webapp",
      script: "npm run dev || (rm -rf node_modules && npm install && npm run dev)"
    },
    {
      name:"Api",
      cwd: "/var/www/html/api",
      script: "artisan",
      args: ["serve", "--host=0.0.0.0", "--port=3333"],
      interpreter: "php",
      instances: 1,
      autorestart: false,
      wait_ready: true,
      max_restarts: 1,
      watch: true,
      error_file: "/var/www/html/api/storage/logs/pm2-error.log",
      out_file: "/var/www/html/api/storage/logs/pm2-out.log",
      log_file: "/var/www/html/api/storage/logs/pm2-combined.log",
      time: true
    }
  ]
}
