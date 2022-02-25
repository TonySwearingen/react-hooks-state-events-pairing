import React from "react";


function Header({Title, Views, Date}) {
    return (
        <div>
            <h1>{Title}</h1>
            <p>{Views} Views | Uploaded {Date}</p>
        </div>
    )
}

export default Header;