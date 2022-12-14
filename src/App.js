import MainAppComponent from './components/breakingbad/app';
import Contacts from './components/contactapp/Contacts';
import Counter from './components/Counter'
import CovidTracker from './components/covidtrackerapp/CovidTracker';
import TextList from './components/homework/TextList';
import List from './components/List'
import MarkdownPreviewer from './components/markdownpreviewer';
import MoneyofBillGates from './components/moneyofbillgates/MoneyofBillGates';
import TextGenerator from './components/textGenerator/index'
function App() {
  return (
    <div className="App" style={{width : '100%', backgroundColor:"white"}}>
      <Counter/>
      <List></List>
      <TextList></TextList>
      <br/>
      <br/>
      <br/>
      <hr/>
      <br/>
      <hr/>
      <hr/>
      <br/>
      <hr/>
      <hr/>
      <br/>
      <hr/>
      <hr/>
      <br/>
      <hr/>
      <h1 style={{marginTop : '10%'}}></h1>
      <MainAppComponent></MainAppComponent>
      <br/>
      <hr/>
      <hr/>
      <br/>
      <hr/>
      <hr/>
      <br/>
      <hr/>
      <h1 style={{marginTop : '10%'}}></h1>
      <MoneyofBillGates/>
      <br/>
      <hr/>
      <hr/>
      <br/>
      <hr/>
      <hr/>
      <br/>
      <hr/>
      <h1 style={{marginTop : '10%'}}></h1>
      <Contacts />
      <br/>
      <hr/>
      <hr/>
      <br/>
      <hr/>
      <hr/>
      <br/>
      <hr/>
      <h1 style={{marginTop : '10%'}}></h1>
      <TextGenerator />
      <br/>
      <hr/>
      <hr/>
      <br/>
      <hr/>
      <hr/>
      <br/>
      <hr/>
      <h1 style={{marginTop : '10%'}}></h1>
      <MarkdownPreviewer/>
      <br/>
      <hr/>
      <hr/>
      <br/>
      <hr/>
      <hr/>
      <br/>
      <hr/>
      <h1 style={{marginTop : '10%'}}></h1>
      <CovidTracker></CovidTracker>
    </div>
  );
}

export default App;
