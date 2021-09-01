import { DropdownMenu } from "./Components/DropdownMenu";

const configData = [
  {
    title: "Option 1",
    submenu: null,
  },
  {
    title: "Option 2",
    submenu: [
      {
        title: "Option 2.1",
        submenu: [
          {
            title: "Option 2.1.1",
            submenu: null,
          },
          {
            title: "Option 2.1.2",
            submenu: null,
          },
        ],
      },
      {
        title: "Option 2.2",
        submenu: [
          {
            title: "Option 2.2.1",
            submenu: null,
          },
          {
            title: "Option 2.2.2",
            submenu: [
              {
                title: "Option 2.2.2.1",
                submenu: null,
              },
              {
                title: "Option 2.2.2.2",
                submenu: null,
              },
            ],
          },
        ],
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <DropdownMenu config={configData} />
    </div>
  );
}
export default App;
