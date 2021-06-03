docker-compose up -d server
docker run -t --network host --name localhost postman/newman run https://raw.githubusercontent.com/DogMaker/api-ecommerce/master/pagar.json
