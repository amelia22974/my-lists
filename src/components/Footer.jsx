import React from "react";

function Footer(){
    const timeInfo = new Date;
    var year = timeInfo.getFullYear();

    return <p className="footer">Copyright © {year}</p>
}

export default Footer;