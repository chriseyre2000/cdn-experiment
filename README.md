# cdn-experiment

This is the sample code for an article on test driving a CDN

```
docker-compose build && docker-compose up 
```

Compare the following:

```
curl -v localhost:5000/now

curl -v localhost:5000/now-cached
```
