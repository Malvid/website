FROM mhart/alpine-node:12

EXPOSE 80

RUN mkdir -p /srv/app/
WORKDIR /srv/app/

# Install global dependencies

RUN apk add --no-cache curl

# Install caddy

RUN curl "https://caddyserver.com/download/linux/amd64?license=personal&telemetry=off" | \
    tar --no-same-owner -C /usr/bin/ -xz caddy

# Add dependencies first so that the docker image build can use
# the cache as long as the dependencies stay unchanged.

COPY package.json yarn.lock /srv/app/
RUN yarn install

# Copy and compile source in the last step as the source
# might change the most.

COPY . /srv/app/
RUN yarn run compile

VOLUME "/srv/app/logs/"

ENTRYPOINT ["/usr/bin/caddy"]
CMD ["--conf", "/srv/app/Caddyfile"]