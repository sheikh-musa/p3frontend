import Main from "./main";
import Features from "./features";
import Contact from "./contact";

export default function Home() {
  return (
	<>
	<div id="home">
  	  <Main />
	</div>
	
	<div id="features">
	  <Features />
	</div>
	
	<div id="contact">
	  <Contact />
	</div>
	</>
  );
}
