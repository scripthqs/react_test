import InfoContext from "../context/InfoContext";
export default function TopFun() {
  return (
    <div>
      {/* 函数式组件中使用Context共享的数据 */}
      <h3>TopFun</h3>
      <InfoContext.Consumer>
        {(value) => {
          console.log(value, "value");
          return (
            <div>
              <div>{value.color}</div>
              <div>{value.size}</div>
              <div>{value.id}</div>
              <div>{value.name}</div>
            </div>
          );
        }}
      </InfoContext.Consumer>
    </div>
  );
}
