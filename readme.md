# NODE.js

- Node.js is a JavaScript Runtime built on google's open-source V8 Javascript engine. 🤔

## Why and when to use Node.js?

<img src='https://user-images.githubusercontent.com/67066348/165082080-ea57df5a-3a6b-4205-b744-86bec4875a51.png' height='400'>

## http status

<img src='https://user-images.githubusercontent.com/67066348/183273616-ad745043-642e-4329-9863-83c54be8955e.png' height='400'>

---

## avoid repeating the try/catch code

```
const asyncHandler = fn => (req, res, next) =>
  Promise
    .resolve(fn(req, res, next))
    .catch(next)

```
