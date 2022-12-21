import './App.css';
import StarReview from './components/starReview';

function App() {
  return (
    <main>
      <div className='leftBox'>
        <h1>10,000+ of our users love our products</h1>
        <p>
          We only provide great products combined with excellent customer service.
          See what our satisfied customers are saying about our services.
        </p>
      </div>

      <div className='rigthBox'>
        <StarReview id={'box1'} star={'Reviews'}/>
        <StarReview id={'box2'} star={'Report Guru'}/>
        <StarReview id={'box3'} star={'BestTech'}/>
      </div>
    </main>
  );
}

export default App;
