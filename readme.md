# NODE.js

- Node.js is a JavaScript Runtime built on google's open-source V8 Javascript engine. 🤔

## Why and when to use Node.js?

<img src='https://user-images.githubusercontent.com/67066348/165082080-ea57df5a-3a6b-4205-b744-86bec4875a51.png' height='400'>

## http status

<img src='https://user-images.githubusercontent.com/67066348/183273616-ad745043-642e-4329-9863-83c54be8955e.png' height='400'>

![express](images/2022-09-21_11-31.jpg)
![api](images/2022-10-05_16-39.jpg)
![rest-architecture](images/2022-10-05_16-53.jpg)

---

## avoid repeating the try/catch code

```node
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);
```

---

- Node Project:

1. Quiz app
2. Forum (Like Reddit)
3. Restaurant Management
4. Social NetWork
