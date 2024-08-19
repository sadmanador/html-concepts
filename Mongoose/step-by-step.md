# Setting up a Express.js project

```bash
touch index.js
```
## Import mongoose
```bash
const mongoose = require("mongoose);
```

## Make connection between DB
```js
connection code below
const dataBase = (module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(
      "<user>:<password>@<cluster>.euko3kv.mongodb.net/<Name of the DB>?retryWrites=true&w=majority"
    );
    console.log("database connected");
  } catch (err) {
    console.log(err);
    console.log("db connection failed");
  }
});
dataBase();
```



##
```js
 const collectionHandler = require("path");
app.use('/', collectionHandler)
```

## handler.js
```js
const express = require("express");
const mongoose = require("mongoose");
```


##  making router

```js
const router = express.Router();
const collectionSchema = require("path");
const Collection = new mongoose.model("Collection", productSchema);

router.get('/', async (req, res)=>{
    try {
    const result = await Product.find({})
    res.send(result);
  } catch (error) {
    console.error(error.message);
  }
})
```


## Code would not gonna working with a productSchema
{making a schema}
schema.js
```js
const mongoose = require("mongoose");
const collectionSchema = mongoose.Schema({
    name: String,
    age: Number
})

module.exports = collectionSchema;
```