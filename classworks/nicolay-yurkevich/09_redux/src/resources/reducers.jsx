import C from "./constants.js"

export const issuesReducer = (state={}, action) => {

	switch(action.type) {
		case C.ToggleIssueState:
			let bool;
			console.log(action.payload.state);
			const data = state.data.map((item)=>{
				if(action.payload.id!=item.id){ return item;}
				else{ 
					console.log('vsavvadsvasddvassagfgadsgfds');
					bool=false;
					if(action.payload.state=='open'){
						console.log({...item, state: 'open'});
					  return {...item, state: 'open'} 
}
					else{bool=true;
					 console.log({...item, state: 'closed'});
					 return {...item, state: 'closed'}


}
				}
			});
			console.log(data);
			if(bool){
			return {...state,openIssues: state.openIssues-1 , closedIssues: state.closedIssues+1 , data};
			}
			else{
			return {...state,openIssues: state.openIssues+1 , closedIssues: state.closedIssues-1 , data};
			}
		case C.OpenNewIssue:
			const openIssues=state.openIssues;
			console.log(action.payload);
			console.log({...state, openIssues:openIssues+1, data: [...state.data, action.payload]});
			return {...state, openIssues:openIssues+1, data: [...state.data, action.payload]};
		case C.GetIssues:	
			console.log(action.payload);
			let open=0; let closed=0;
			 action.payload.forEach((item)=>{if(item.state==='open'){
			 		open++;
			 }
			 else{
			 	closed++
			 }
			})
			 console.log({...state, openIssues: open, closedIssues: closed, data: action.payload });
			return {...state, openIssues: open, closedIssues: closed, data: action.payload }
		case C.SetCurrentState:
			return {...state, currentState: action.payload}
		default:
			return state;
	}
}