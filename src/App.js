import Header from './components/Header'
import MediaCard from './components/MediaCard'

function App() {
  const placeholderName = "Lizard";
  const placeholderDesc = "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica";
  return (
    <div className="App">
        <Header />
        <div>
          <MediaCard name={placeholderName} desc={placeholderDesc}/>
          <MediaCard name={placeholderName} desc={placeholderDesc}/>
          <MediaCard name={placeholderName} desc={placeholderDesc}/>
        </div>
    </div>
  );
}

export default App;
