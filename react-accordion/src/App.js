import "./App.css";
import Accordion from "./components/Accordion";
function App() {
  const AccordionData = [
    {
      title: "Accordion Title 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis impedit maiores debitis minima eveniet, voluptatibus repellat odit suscipit pariatur architecto amet, libero omnis nostrum quis minus esse itaque. Id harum magni, animi, nesciunt porro quas corporis laborum voluptate ipsum minima soluta nisi sint iure? Vero molestiae consectetur reprehenderit et cupiditate?",
    },
    {
      title: "Accordion Title 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis impedit maiores debitis minima eveniet, voluptatibus repellat odit suscipit pariatur architecto amet, libero omnis nostrum quis minus esse itaque. Id harum magni, animi, nesciunt porro quas corporis laborum voluptate ipsum minima soluta nisi sint iure? Vero molestiae consectetur reprehenderit et cupiditate?",
    },
    {
      title: "Accordion Title 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis impedit maiores debitis minima eveniet, voluptatibus repellat odit suscipit pariatur architecto amet, libero omnis nostrum quis minus esse itaque. Id harum magni, animi, nesciunt porro quas corporis laborum voluptate ipsum minima soluta nisi sint iure? Vero molestiae consectetur reprehenderit et cupiditate?",
    },
  ];
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          <div className="row">
            <div className="col-12">
              <h3>Frequently Asked Questions</h3>
            </div>
          </div>
          <div className="col-12 text-left">
            <Accordion data={AccordionData} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
