# TS Pipes

[![GitHub license](https://img.shields.io/github/license/nikmerlock97/ts-pipes)](https://github.com/nikmerlock97/ts-pipes/blob/typescript/LICENSE)

### Pipe transformation utility functions for TypeScript/JavaScript inspired by Angular Pipes and ngx-pipes


<!-- ![Svelte](https://img.shields.io/static/v1?label=Made%20with%20&message=Svelte&color=#FF3E00&labelColor=#FF3E00) -->

## Table of contents

 - [Installation](#installation)
 - [Date](#date)   
    - [timeAgo](#timeago)
 - [String](#string)
    - [match](#match)
    - [repeat](#repeat)
<!--- [scan](#scan)
    - [shorten](#shorten)
    - [stripTags](#striptags)
    - [ucfirst](#ucfirst)
    - [ucwords](#ucwords)
    - [trim](#trim)
    - [ltrim](#ltrim)
    - [rtrim](#rtrim)
    - [reverse](#reverse)
    - [slugify](#slugify)
    - [camelize](#camelize)
    - [latinise](#latinise)
    - [lines](#lines)
    - [underscore](#underscore)
    - [test](#test)
    - [lpad](#lpad)
    - [rpad](#rpad)
    - [makePluralString](#makepluralstring)
    - [wrap](#wrap) -->
 - [Array](#Array)   
    - [flatten](#flatten) 
<!--- [diff](#diff)
    - [initial](#initial)
    - [intersection](#intersection)
    - [range](#range)
    - [reverse](#reverse)
    - [tail](#tail)
    - [truthify](#truthify)
    - [union](#union)
    - [unique](#unique)
    - [without](#without)
    - [pluck](#pluck)
    - [shuffle](#shuffle)
    - [every](#every)
    - [some](#some)
    - [sample](#sample)
    - [groupBy](#groupby)
    - [groupByImpure](#groupbyimpure)
    - [filterBy](#filterby)
    - [filterByImpure](#filterbyimpure)
    - [orderBy](#orderby)
    - [orderByImpure](#orderbyimpure)
    - [chunk](#chunk)
    - [fromPairs](#fromPairs)
 - [Object](#object)
    - [keys](#keys)
    - [values](#values)
    - [pairs](#pairs)
    - [pick](#pick)
    - [omit](#omit)
    - [invert](#invert)
    - [invertBy](#invertby)
    - [diffObj](#diffobj)
 - [Math](#math)   
    - [min](#min)
    - [max](#max)
    - [sum](#sum)
    - [average](#average)
    - [percentage](#percentage)
    - [ceil](#ceil)
    - [floor](#floor)
    - [round](#round)
    - [sqrt](#sqrt)
    - [pow](#pow)
    - [degrees](#degrees)
    - [radians](#radians)
    - [bytes](#bytes) -->
 - [Boolean](#boolean)   
    - [isNull](#isnull)
    - [isDefined](#isdefined)
    - [isUndefined](#isundefined)
    - [isString](#isstring)
    - [isFunction](#isfunction)
    - [isNumber](#isnumber)
    - [isArray](#isarray)
    - [isObject](#isobject)
    - [isGreaterThan](#isgreaterthan)
 

## Installation

1. Use npm to install the package

  ```terminal
  $ npm install ts-pipes --save 
  ```



## Date

### timeAgo()

Time ago pipe converts date to 'just now', 'X days ago', 'last week', 'X days ago', etc..

**Usage:** 
```typescript
import Pipe from 'ts-pipes';

const date = Pipe('date');
const now = new Date();
// timeAgo also supports moment.js objects
const lastWeek = moment().subtract(10, 'days');
```

```html
<span>Updated: { date.timeAgo(now) }</span> <!-- Output: "just now" -->
<span>Updated: { date.timeAgo(lastWeek) }</span> <!-- Output: "last week" -->
```

## String



### repeat()

Repeats a string n times

**Usage:** `string | repeat: times: [separator|optional]`

```html
<p>{{ 'example' | repeat: 3: '@' }}</p> <!-- Output: "example@example@example" -->
```


## Getting started

Clone this repository and install its dependencies:

```bash
$   git clone https://github.com/nikmerlock97/ts-pipes
$   cd ts-pipes
$   npm install
```


## Building

```bash
$  npm run build
```

This builds the library to `dist`, generating three files:


### 1. ***dist/ts-pipes.cjs.js***

 - a CommonJS bundle, suitable for use in Node.js, that `require`s the external dependency
 - corresponds to the `"main"` field in package.json
    
### 2. ***dist/ts-pipes.esm.js***

 - an ES module bundle, suitable for use in other people's libraries and applications, that `import`s the external dependency
 - corresponds to the `"module"`field in package.json
    
### 3. ***dist/ts-pipes.umd.js***
 - a UMD build, suitable for use in any environment (including the browser, as a `<script>` tag), that includes the external dependency
 - corresponds to the `"browser"` field in package.json

`npm run dev` builds the library, then keeps rebuilding it whenever the source files change using [rollup-watch](https://github.com/rollup/rollup-watch).


## Testing

`npm test` builds the library, then tests it.


## License


Forked from [rollup-starter-lib](https://github.com/rollup/rollup-starter-lib/tree/typescript).

Inspiration drawn from [Angular pipes](https://angular.io/api/core/Pipe) and [ngx-pipes](https://github.com/danrevah/ngx-pipes).

[MIT](LICENSE) License.
