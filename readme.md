# repeatrepeat

[![Build Status](https://travis-ci.org/agarrharr/repeatrepeat.svg?branch=master)](https://travis-ci.org/agarrharr/repeatrepeat)

## Install

```
$ npm install --save repeatrepeat
```

## Usage

```js
const repeat = require('repeatrepeat');

repeat(2, 'hello');
//=> 'hellohello'
```

## API

### repeatrepeat(length, string)

Repeats `string` `length` number of times.

#### length

Type: `number`

Padding length.

#### string

Type: `string`

String to repeat.

## License

MIT
