import './App.css';
import MainPomodoro from './components/MainPomodoro';
import PomodoroProvider from './context/PomodoroProvider';

function App() {
  return (
    <main>
      <PomodoroProvider>
        <MainPomodoro/>
      </PomodoroProvider>
    </main>
  );
}

export default App;
