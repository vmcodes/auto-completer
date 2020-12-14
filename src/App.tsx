import React from "react";

interface UserProps {
  Data: string[];
  classes: string;
  length: number;
}

const App: React.FC<UserProps> = ({ Data, classes, length }) => {
  const [list, setList] = React.useState<JSX.Element[] | null>(null);
  const [selection, setSelection] = React.useState<string>("");

  const selectItem = (item: string) => {
    setList(null);
    setSelection(item);
  };

  const renderList = (userInput: string) => {
    let options: JSX.Element[] = [];

    Data.forEach((item: string, index: number) => {
      if (item.toLowerCase().includes(userInput.toLowerCase())) {
        options.push(
          <div>
            <input
              key={index}
              value={item}
              onClick={() => selectItem(item)}
              className="dropdown"
              readOnly
            />
          </div>
        );
      }
    });

    options.sort();

    if (userInput.length > 0) {
      setSelection(userInput);
      setList(options.slice(0, length));
    } else {
      setSelection(userInput);
      setList(options.slice(0, 0));
    }
  };

  return (
    <div className={classes}>
      <input value={selection} onChange={(e) => renderList(e.target.value)} />
      {list}
    </div>
  );
};

export default App;
