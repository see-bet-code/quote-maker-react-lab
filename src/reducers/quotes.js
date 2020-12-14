export default (state = [], action) => {
  switch (action.type) {

    case "ADD_QUOTE":
      return [...state, action.quote];

    case "REMOVE_QUOTE":
      let idx = state.findIndex(q => q.id  === action.quoteId)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];
    
    case "UPVOTE_QUOTE":
      const increaseVote = (q) => {
        q.votes++
        return q
      }
      return [...state].map(q => q.id === action.quoteId ? increaseVote(q) : q);

    case "DOWNVOTE_QUOTE":
      const decreaseVote = (q) => {
        if (q.votes !== 0) q.votes-- 
        return q
      }
      return [...state].map(q => q.id === action.quoteId ? decreaseVote(q) : q);

    default:
      return state
  }

}