import React from "react";

import withHigherOrderComponent from "./hoc/withHigherOrderComponent";
import withLog from "./hoc/withLog";
import withFetch from "./hoc/withFetch";
import withToggle from "./hoc/withToggle";

import { compose } from "recompose";

const MyComponents = (props) => <p>{JSON.stringify(props, null, 2)}</p>;

export default MyComponents;

// export default withHigherOrderComponent(MyComponents);
// export default withLog(MyComponents);
// export default withToggle(MyComponents);

// каррирование
// export default withFetch("qweqwe")(MyComponents);

// использование нескольких хоков для одного компонента
// export default withLog(withToggle(withHigherOrderComponent(MyComponents)));

// использование библиотеки recompose - композиция Хоков
// export default compose(
//   withLog,
//   withToggle,
//   withHigherOrderComponent
// )(MyComponents);
