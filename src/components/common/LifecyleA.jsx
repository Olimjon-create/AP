// componentDidMount();
class Lifecyle extends React.Component {
  render() {
    return (
      <>
        <h1>
          Hello Im Lifcle <Component></Component>
        </h1>
      </>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Lifecyle />);
