FROM php:8-fpm-alpine

WORKDIR /var/www/html/

RUN php -r "readfile('http://getcomposer.org/installer');" | php -- --install-dir=/usr/bin/ --filename=composer

RUN apk add --no-cache pcre-dev $PHPIZE_DEPS \
    && pecl install redis \
    && docker-php-ext-enable redis.so \
    && docker-php-ext-install mysqli pdo pdo_mysql 

COPY composer.json composer.lock ./

RUN composer install

COPY . .

EXPOSE 8000

CMD  php -S 0.0.0.0:8000 -t public 