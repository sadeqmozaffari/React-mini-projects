import Counter from "./app/components/Counter";
import CountryList from "./app/components/CountryList";
import Header from "./app/components/Header";

function App() {
  return (
    <div className="bg-dark py-4 text-white">
      <Header />
      <Counter />
      <CountryList />
    </div>
  );
}

export default App;
