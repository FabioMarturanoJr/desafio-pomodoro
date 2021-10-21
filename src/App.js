import './App.css';
import Timer from './components/Timer';
import PomodoroProvider from './context/PomodoroProvider';

function App() {
  return (
    <main>
      <PomodoroProvider>
        <Timer/>
      </PomodoroProvider>
    </main>
  );
}

export default App;
