# mustache ractive loader for webpack

## Installation

`npm install mustache-ractive-loader`

## Usage

webpack.config.js
``` javascript
var mustache = require("mustache-ractive-loader");

module: {
	loaders: [
		{
			test: /\.mustache$/,
			loader: 'mustache',
		}
	]
}
```

index.js
``` javascript
import Ractive from 'ractive'
import tpl from './tpl/index.mustache'

const ractive = new Ractive({
    el: '#app',
    template: tpl,
});
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
