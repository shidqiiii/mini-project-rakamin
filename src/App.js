import CounterExample from './Components/CounterExample';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HelloWorld from './Components/HelloWorld'

function App() {
  return (
    <div>
      <Header />

      <HelloWorld name="Albert" />

      <Footer />

      {/* <CounterExample /> */}
    </div>
  );
}

export default App;
