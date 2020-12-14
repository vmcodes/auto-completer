import React from "react";
import App from "./App";
import "./styles.css";

type PropState = {
  data?: string[];
  classes?: string;
  length?: number;
};

const AutoCompleter: React.FC<PropState> = ({ data, classes, length }) => {
  const [userData, setUserData] = React.useState<string[]>([]);
  const [classNames, setClassNames] = React.useState<string>("");
  const [listLength, setListLength] = React.useState<number>(0);

  React.useEffect(() => {
    if (data) {
      setUserData(data);
    }

    if (classes) {
      setClassNames(classes);
    }

    if (length) {
      setListLength(length);
    }
  }, [data, classes, length]);

  return <App Data={userData} classes={classNames} length={listLength} />;
};

export default AutoCompleter;
