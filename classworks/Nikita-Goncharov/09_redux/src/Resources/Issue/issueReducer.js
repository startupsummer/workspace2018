import data from './issueSelector.js';

const initialState = {data: data, showOpen: true, showClose: false};

export default function page(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ISSUE':
      const item = {
        id: Math.floor(Math.random() * 100000),
        title: 'Some text for issue',
        state: 'open',
      };
      return {
        data: [...state.data, item],
        showOpen: true,
        showClose: false,
      };
    case 'CLOSE_ISSUE':
      state.data.map((elem) => {
        if (elem.id === action.payload) {
          if (elem.state === 'open') {
            elem.state = 'closed';
          }
        }
      });
      return {
        data: [...state.data],
        showOpen: true,
        showClose: true,
      };
    case 'SHOW_OPEN':
      return {
        data: [...state.data],
        showOpen: true,
        showClose: false,
      };
    case 'SHOW_CLOSE':
      return {
        data: [...state.data],
        showOpen: false,
        showClose: false,
      };
    default:
      return state;
  }
}
