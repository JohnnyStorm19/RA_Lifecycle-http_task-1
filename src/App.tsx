import "./App.css";
import { ClockComponent } from "./components/ClockComponent";
import { ClockForm } from "./components/ClockForm";
import { useApp } from "./hooks/useApp";

function App() {
  const {handleFormSubmit, handleDeleteClock, submittedValues} = useApp();

  return (
    <>
      <ClockForm onFormSubmit={handleFormSubmit} />
      <div className="clocks-container">
        {submittedValues.length >= 1 &&
          submittedValues.map((value, id) => {
            if (value.text.length > 0) {
              return (
                <ClockComponent
                  key={id}
                  offset={value.timezone}
                  clockName={value.text}
                  uniqueKey={value.key}
                  onDeleteCallback={handleDeleteClock}
                />
              );
            }
          })}
      </div>
    </>
  );
}

export default App;
