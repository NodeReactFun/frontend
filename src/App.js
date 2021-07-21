import Header from './components/Header'
import MediaCard from './components/MediaCard'

function App() {
  return (
    <div className="App">
        <Header />
        <div>
          <MediaCard />
          <MediaCard />
          <MediaCard />
        </div>
    </div>
  );
}

export default App;
