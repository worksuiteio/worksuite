#!/bin/sh
set -ex

# This Entrypoint used when we run Docker container outside of Docker Compose (e.g. in k8s)

# in production we should replace API URL in generated JS code
if [[ -z ${API_BASE_URL} ]]; then
	API_BASE_URL="http://localhost:3000"
else
	sed -i "s#http://localhost:3000#$API_BASE_URL#g" *.js
fi

export PORT=${PORT:-4200}
export HOST=${HOST:-0.0.0.0}
export API_HOST=${API_HOST:-api}
export API_PORT=${API_PORT:-3000}
export API_BASE_URL=$API_BASE_URL

envsubst '${API_HOST} ${API_PORT} ${API_BASE_URL}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/nginx.conf

exec "$@"