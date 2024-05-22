import Game from "./Game";

function App() {
  return (
    <div className="bg-slate-700 h-screen flex flex-col justify-center items-center ">
      <div className="bg-slate-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Quiz</h1>
        <Game />
      </div>
    </div>
  );
}

export default App;
