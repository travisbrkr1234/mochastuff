#mocha


## Hooks
##### beforeEach - Runs before each test

example:
```javascript
    beforeEach(function() {
      console.log('Running Test: ');
    })
```
---
##### before - Runs before all tests (once)

example:
```javascript
    before (function() {
      console.log('Running All Tests: ');
    })
```
---
##### afterEach - Runs after each test

example:
```javascript
    afterEach(function() {
      console.log('Done!');
    })
```
---
##### after - Runs after all test (once)

example:
```javascript
    afterEach(function() {
      console.log('All tests finished');
    })
```
---
##### only - Runs just the test case where 'only' was called

example:
```javascript
    it.only('returns lowercase of a string', function() {...
```
---

##### skip - Skips just the test case where 'skip' was called

example:
```javascript
    it.skip('returns lowercase of a string', function() {...
```
---
## Reporters
