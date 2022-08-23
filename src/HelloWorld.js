/* передаем children в компонент*/
function Lable({ children }) {
  return <span style={{ color: "#0f0" }}>{children}</span>;
}

export function HelloWorld(props) {
  const { color } = props;
  const style = {
    color,
  };
  return (
    <div>
      Hello <span style={style}>World</span> !<Lable>Some custom lable</Lable>
    </div>
  );
}
/*JSX єто специальній синтаксис, который пробразовывается транспайлером (babel) и они преображают код в цепочку вызовов.
 */
