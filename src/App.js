import './App.css';
import Review from "./Review"

export default function App() {
  return (
    <main>
      <section className='container'>
        <div>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        <Review/>
      </section>
    </main>
  );
}