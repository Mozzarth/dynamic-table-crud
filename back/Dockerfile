FROM mysql:8.0.23


LABEL mail="moisescaicedo15@gmail.com"
LABEL name="Moises David Caicedo Corena"


ENV MYSQL_ROOT_PASSWORD=YOUR_PASS_ROOT
# ENV MYSQL_USER=userapp
# ENV MYSQL_PASSWORD=password 
# ENV MYSQL_DATABASE=smartsoft
# ENV MYSQL_RANDOM_ROOT_PASSWORD=YES
COPY ./FUENTES/ /docker-entrypoint-initdb.d
EXPOSE 3000:3306