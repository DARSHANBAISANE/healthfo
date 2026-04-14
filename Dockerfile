# Use stable Nginx alpine image for minimal footprint
FROM nginx:stable-alpine

# Copy local assets to Nginx html directory
COPY . /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Add a startup script to handle dynamic port mapping for Cloud Run
# Cloud Run provides $PORT environment variable
CMD ["/bin/sh", "-c", "sed -i 's/listen       8080;/listen '\"$PORT\"';/' /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]
