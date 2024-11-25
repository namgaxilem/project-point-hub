https://strapi.io/integrations/azure

**Required packages/software**
- nodejs
- pm2: ecosystem.config.js
- nginx: nginx.conf
- yarn
- git

```
sudo apt update
sudo apt upgrade -y

pm2 init
pm2 start ecosystem.config.js
```

#### How to use pm2 to run strapi 
```
pm2 startup systemd
```

#### How to config nginx
1. Install Certbot

```
sudo apt update
sudo apt install certbot python3-certbot-nginx nginx
```

2. Obtain SSL Cert
https://certbot.eff.org/instructions?ws=nginx&os=snap

```
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
sudo certbot --nginx -d strapi.javtophd.online
sudo nginx -t
```

3. Next, create a new Nginx configuration file for your Strapi app
```
sudo nano /etc/nginx/sites-available/strapi
```

4. Create nginx.conf file
```
Pass the content of nginx.conf to this file
```

5. Enable the Nginx Configuration
```
sudo ln -s /etc/nginx/sites-available/strapi /etc/nginx/sites-enabled/
```

6. Test Nginx Configuration
```
sudo nginx -t
```

7. If everything okay, start nginx:
```
sudo systemctl restart nginx
```