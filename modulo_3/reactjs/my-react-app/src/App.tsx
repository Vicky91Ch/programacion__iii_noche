import ButtonCounter from "./components/ButtonCounter";
import HelloWorld from "./components/HelloWorld";
import TextInput from "./components/TextInput";
import WelcomeUser from "./components/WelcomeUser";
import ToggleMessage from "./components/ToggleMessage";
import ShowDate from "./components/ShowDate";

function App(){
  return (
    <>
      <HelloWorld/>
      <WelcomeUser/>
      <ButtonCounter/>
      <TextInput/>
      <ToggleMessage/>
      <ShowDate/>
    </>
  );
}

export default App;