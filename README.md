# MongoDB $inc Operator Error: Incorrect Usage with String Values

This repository demonstrates a common error when using the `$inc` operator in MongoDB update queries.  The error occurs when attempting to increment a field by a string value instead of a numeric value.

## Bug Description

The `$inc` operator is used to increment a numeric field by a specified value.  If the provided value is not a number (such as a string), MongoDB will throw an error or behave unexpectedly.

## Bug Solution

The solution involves ensuring that the value passed to the `$inc` operator is always a number. This can involve explicitly casting strings to numbers before performing the update or ensuring data validation to only permit numbers in relevant fields.
