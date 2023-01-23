import './App.css';
import StarReview from './components/starReview';
import { ComentSquare } from './components/comentSquare';


function App() {
  return (
    <main>
      <div className='top'>
        <div className='leftBox'>
          <h1>10,000+ of our users love our products</h1>
          <p>
            We only provide great products combined with excellent customer service.
            See what our satisfied customers are saying about our services.
          </p>
        </div>

        <div className='rightBox'>
          <StarReview />
        </div>
      </div>

    <div className='bottom'>
      <ComentSquare />
    </div>
      
    </main>
  );
}

export default App;
