# @vmcodes/auto-completer

### Getting Started

npm i @vmcodes/auto-completer

### [Demo](https://vmcodes-auto-completer.netlify.app/)

### Basic Usage

```javascript
import React from "react";
import AutoCompleter from "@vmcodes/auto-completer";
import "./styles.css";

const App = () => {
  const cities = [
    "New York City",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
  ];

  return <AutoCompleter data={cities} classes="custom" length={5} />;
};

export default App;
```
