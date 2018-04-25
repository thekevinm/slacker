const initialState = {
	currentRoom: 'general',
	rooms: ['general'],
	messages: []
}

export default function (state = initialState, action) {
	switch (action.type) {
		case 'ADD_MESSAGE':
			return {...state, messages: [action.payload, ...state.messages]}
		case 'JOIN ROOM':
			return {...state, currentRoom: action.payload}
		case 'UPDATE_ROOMS':
			return {...state, rooms: action.payload}
	default:
		return state
	}
}