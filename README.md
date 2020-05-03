# react-color-attribute
React component for rendering product color attributes.

[Click here for demo.](https://elementsweb.github.io/react-color-attribute/)

## Installation
Install the package from npm:

```
npm install --save react-color-attribute
```

## Usage
```
import ColorAttribute from 'react-color-attribute';
```

### Props

|Name|Type|Default|Description|
|---|---|---|---|
|`colors`|`string[]`|`[]`|Valid CSS colors to render in attribute component|
|`id`|`string`||Unique identifier for the color attribute|
|`selected`|`boolean`|`false`|Determines if the component should render in a selected state|
|`onMouseEnter`|`function`||Callback fired when mouse enters component<br><br>**Signature:**<br>`function(id: string) => void`|
|`onMouseLeave`|`function`||Callback fired when mouse leaves component<br><br>**Signature:**<br>`function(id: string) => void`|
|`onClick`|`function`||Callback fired when component is clicked component<br><br>**Signature:**<br>`function(id: string) => void`|

![Node.js Package](https://github.com/elementsweb/react-color-attribute/workflows/Node.js%20Package/badge.svg)