import * as React from "react";
import Helmet from "react-helmet";
import { withPrefix } from "gatsby";
import { Layout, Seo } from "components/common";

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "More About Me"; 
    moreText.style.display = "none";
    } else {
    dots.style.display = "none";
    btnText.innerHTML = "Less About Me"; 
    moreText.style.display = "inline";
    }
}

const StaticFilesDemo = () => (
  <Layout>
    {/* <Helmet>
        <link rel="stylesheet" href={withPrefix('css/readmore.css')}></link>
    </Helmet> */}
    <Seo title="Static Files Demo" />
    <h1 id="yup">Static Files Demo</h1>
    <h2>Read More Read Less Button</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel<span id="dots">...</span><span id="more">erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span></p>

    <button id="myBtn" onClick={myFunction}>Read more</button>
    
  </Layout>
)

export default StaticFilesDemo