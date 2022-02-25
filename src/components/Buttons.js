import React, {useState} from "react";

function Buttons({ups, downs}) {
    const [upvotes, setUpvotes] = useState(ups)
    const [downvotes, setDownvotes] = useState(downs)

    function plusVotes() {
        setUpvotes(upvotes +1)
    }
    function minusVotes() {
        setDownvotes(downvotes -1)
    }

    return (
        <div>
            <span>
                <button onClick={plusVotes}>{ups} "👍"</button>
                <button onClick={minusVotes}>{downs} "👎"</button>
            </span>
            
        </div>
       
            
        
    )
}

export default Buttons