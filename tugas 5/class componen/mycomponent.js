class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    tambah = () => {
      this.setState(setState => ({
        count: setState.count + 1
      }));
    };
  
    kurang = () => {
      this.setState(setState => ({
        count: setState.count - 1
      }));
    };
  
    reset = () => {
      this.setState({
        count: 0
      });
    };
  
    render() {
      return (
        <div>
          <h2> TUGAS Counter (Class Component)</h2>
          <h1>{this.state.count}</h1>
          <div>
            <button onClick={this.kurang} style={{ marginRight: '10px', fontSize: '25px' }}>-1</button>
            <button onClick={this.tambah} style={{ marginRight: '10px', fontSize: '25px' }}>+1</button>
          </div>
          <button onClick={this.reset} style={{ marginRight: '10px', fontSize: '25px' }}>Reset</button>
        </div>
      );
    }
  }
  
  ReactDOM.createRoot(document.getElementById('classcomponent')).render(<MyComponent />);
  