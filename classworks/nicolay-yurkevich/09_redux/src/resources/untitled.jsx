  
  constructor(){
    super();
    this.state = {
      currentState: 'open',
      openIssues: 4,
      closedIssues: 1,
      data: defultData
    }
  }


/*
Actions:
1. ToggleIssueState
2. SetCurrentState
3. Open new Issue
4. Get Issues



*/






  componentDidMount() {
      fetch('https://api.github.com/repos/kazeens/issues/issues?access_token=e83ce4a2117761dacc9740b100689608f7bb5f17&state=all')
      .then(response => response.json())
      .then(gitData  => this.setState({
        data: gitData,
        openIssues: gitData.filter(item => item.state === 'open').length,
        closedIssues: gitData.filter(item => item.state === 'closed').length,
      }))
      .catch(console.log('errrrrrrrrrrrrrrrrorrrrrr'));
      
  }
  dateCount= ()=>{
    let countOpen=0;
    let countClosed=0;
      this.state.data.reduce((prevCount,item)=>{if(item.state==='open'){return countOpen=countOpen+1;}});
      this.state.data.reduce((prevCount,item)=>{if(item.state==='closed'){return countClosed=countClosed+1;}});
      this.setState({
        openIssues: countOpen,
        closedIssues: countClosed
      })           
  };

  onClickOpen =()=>{

    this.setState({
      currentState: 'open'
    });
  }

  onClickClose=()=>{

    this.setState({
      currentState: 'closed'
    });
  }

 toggleIssueState = (id) => {
    console.log(this);
    const targetIssue = this.state.data.find(issue => issue.id === id);
    
    const state = (targetIssue.state === 'open') ? 'closed' : 'open';
    const newIssuesList = this.state.data
      .map(issue => issue.id === id ? {...issue, state } : issue);
      console.log(this.state.openIssues);
    if(state==='open'){
      this.setState({
     data: newIssuesList ,
     openIssues: this.state.openIssues+1,
     closedIssues: this.state.closedIssues-1
    });
   }
   else{
      this.setState({
     data: newIssuesList ,
     openIssues: this.state.openIssues-1,
     closedIssues: this.state.closedIssues+1 
    });    
   }
  }
  
  moveClosedToOpen=()=> {
    console.log('yyyyyyyyyyyy');
    this.setState=({
      closedIssues: this.state.closedIssues-1,
      openIssues: this.state.openIssues+1
    });
  }

  moveOpentoClosed=()=>{  
    console.log('yyyyyyyyyyyy');

    this.setState=({
      closedIssues: this.state.closedIssues+1,
      openIssues: this.state.openIssues-1
    });
  }



  addNewIssue = () => {
    const id = Math.round(Math.random() * 1000000000);
    const newOpenIssue= {
      title: `New issue ${String(id)} that's been created`,
      id: id,
      state: 'open',
      body: 'Simple description Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    };
    
    fetch('https://api.github.com/repos/kazeens/issues/issues?access_token=e83ce4a2117761dacc9740b100689608f7bb5f17', {
   method: 'POST',
    body: JSON.stringify({
      state: 'open',
      title: `New issue ${String(id)} that's been created`,
      id: id,
      body: 'Simple description Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    })

    })
    .then(()=>{
    this.setState({
      data: [...this.state.data, { ...newOpenIssue, id }],
      openIssues: this.state.openIssues+1
    })

    });
  };


  createNewOpen=()=>{
    this.setState=({
      openIssues: this.state.openIssues+1
    });
  }