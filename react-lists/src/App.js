import "./App.css";
import ProjectList from "./components/ProjectList";
import SimpleList from "./components/SimpleList";
import StudentList from "./components/StudentList";

function App() {
  return (
    <div className="App">
      <SimpleList />
      <StudentList />
      <ProjectList />
    </div>
  );
}

export default App;
