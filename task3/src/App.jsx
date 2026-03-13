import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 gap-10 flex-col">
      <h1 className="text-4xl font-bold text-sky-400 underline">
        Tailwind v4 is Live!
      </h1>
      <div className="flex gap-10">

      <ControlledForm />
      <UncontrolledForm className="flex justify-center items-center border-2" />
      </div>
    </div>
  )
}

export default App
