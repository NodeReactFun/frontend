import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header'
import MediaCard from './components/MediaCard'
import { Grid, Container } from '@material-ui/core';

function App() {
  const placeholderName = "Product";
  const placeholderDesc = "Here our generic product will excite you and cause your brain to release dopamine when purchasing said product. Nothing is quite better than spending money on a product like this one! You won't regret it or think about the consequences of the produce of this item causes to the environment.";
  return (
    <div className="App">
        <Header />
        <Container style={{ padding: 20 }}>
        <Grid container spacing={5} justify="center">
          <Grid item>
            <MediaCard name={placeholderName} desc={placeholderDesc}/> 
          </Grid>
          <Grid item>
            <MediaCard name={placeholderName} desc={placeholderDesc}/> 
          </Grid>
          <Grid item>
            <MediaCard name={placeholderName} desc={placeholderDesc}/> 
          </Grid>
        </Grid>
        </Container>
    </div>
  );
}

export default App;
