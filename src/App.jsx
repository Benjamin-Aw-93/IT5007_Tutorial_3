const initialWaitList = [
  {
    id: 1, name: 'John Smith', number: '93659622',
    created: new Date('2018-08-15'), 
  },
  {
    id: 2, name: 'Mary Sue', number: '9817170+',
    created: new Date('2018-08-15'),
  },
  {
    id: 3, name: 'Test Test', number: '000000000',
    created: new Date('2018-08-15'), 
  },
];


class DisplayHomePage extends React.Component {
    render() {
      return (
        <div>Use me to keep track of customers in the waiting list.</div>       
      );
    }
  }

  function DisplayFreeSlots(props){
    const length = props.length;
      return (
        <div>Current capactity: {length} / 25</div>
      );
  }

  function WaitRow(props){
      const entry = props.entry;
      return (
        <tr>
          <td>{entry.id}</td>
          <td>{entry.name}</td>
          <td>{entry.number}</td>
          <td>{entry.created.toDateString()}</td>
        </tr>
      );
  }

  function DisplayCustomers(props){
      const waitRows = props.waitlist.map(entry => <WaitRow key = {entry.id} entry = {entry}/>);
      return (
        <table className = "bordered-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Mobile Number</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {waitRows}
            </tbody>
        </table>
      );
  }
  
  class AddingCustomer extends React.Component {
    render() {
      return (
        <form name = "addCustomer" onSubmit = {this.handleAddCust}>
          <input type = 'text' name = 'name' placeholder = 'Name' />
          <input type = 'text' name = 'number' placeholder = 'Mobile Number'/>
          <button>Add</button>
        </form>
      );
    }
  }

  class DeleteCustomer extends React.Component {
    constructor(){
      super();
    }   
    render() {
      return (
        <form name = "removeCustomer" onSubmit = {this.handleRmCust}>
          <input type = 'text' name = 'id' placeholder = 'ID' />
          <button>Remove</button>
        </form>
      );
    }
  }
  
  class HotelWaitlist extends React.Component {
    constructor(){
      super();
      this.state = {waitlist: []};
    }
    
    componentDidMount() {
      this.loadData();
      }

    loadData() {
      setTimeout(() => {
        this.setState({ waitlist: initialWaitList });
      }, 500);
    }


    render() {
      return (
        <React.Fragment>
          <h1>Hotel Waitlist</h1>
          <DisplayHomePage />
          <hr />
          <DisplayFreeSlots length = {this.state.waitlist.length}/>
          <hr />
          <DisplayCustomers waitlist = {this.state.waitlist}/>
          <hr />
          <AddingCustomer />
          <hr />
          <DeleteCustomer />
        </React.Fragment>
      );
    }
  }
  
  const element = <HotelWaitlist />;
  
  ReactDOM.render(element, document.getElementById('contents'));
