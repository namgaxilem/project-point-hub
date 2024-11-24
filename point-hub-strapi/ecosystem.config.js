module.exports = {
  apps: [
    {
      name: "point-hub-strapi",
      cwd: "/home/namgaxilem/project-point-hub/point-hub-strapi",
      script: "yarn",
      args: "start",
      env: {
        // NODE_ENV: "development",
        // DB_HOST: "localhost",
        // DB_PORT: "5432",
        // DB_NAME: "strapi_dev",
        // DB_USER: "strapi",
        // DB_PASS: "mysecurepassword",
        // JWT_SECRET: "aSecretKey",
      },
    },
  ],
};
