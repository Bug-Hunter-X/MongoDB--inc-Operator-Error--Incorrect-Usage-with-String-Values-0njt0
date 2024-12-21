```javascript
// Correct usage of $inc operator in MongoDB update query
db.collection.updateOne({fieldName: 'value'}, {$inc: {fieldName: 1}});

// Or using a variable
let incrementValue = 1;
db.collection.updateOne({fieldName: 'value'}, {$inc: {fieldName: incrementValue}});
```