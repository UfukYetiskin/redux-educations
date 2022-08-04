import MainAppComponent from './components/breakingbad/app';
import Counter from './components/Counter'
import TextList from './components/homework/TextList';
import List from './components/List'
import MoneyofBillGates from './components/moneyofbillgates/MoneyofBillGates';
function App() {
  return (
    <div className="App" style={{width : '100%'}}>
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
    </div>
  );
}

export default App;
