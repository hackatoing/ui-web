# my-pet-code

## Pré-req:
    - npm >= 8.5.0
    - node >= 16.14.2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

 # Deploy

 ### To build image
 ```
docker build -t my-pet-registry/my-pet-web-front .
 ```

 ### To run container
 ```
docker run -it -p 8080:80 --rm --name my-pet-code-front my-pet-registry/my-pet-web-front
 ```