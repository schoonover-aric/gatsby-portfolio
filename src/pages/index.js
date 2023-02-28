import React from "react";
import { Layout, Seo } from "components/common";
import { Intro, Skills, Contact, Projects, Laravel } from "components/landing";

const Home = () => (
	<Layout>
		<Seo />
		<Intro />
		{/* <Projects /> */}
        <Laravel />
		<Skills />
		<Contact />
	</Layout>
);

export default Home;
