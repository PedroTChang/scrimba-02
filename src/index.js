import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";

// import logo from './public/logo192.png'

function Header() {
	return (
		<div>
			<nav>
				<img src={"./logo192.png"} width="40px" alt="logo"/>
			</nav>
		</div>
	);
}

function Footer() {
	return (
		<footer>
			<small>© 2022 Chang development. All rights reserved.</small>
		</footer>
	);
}

function Page() {
	return (
		<div>
			<Header/>
			<h1>Reasons I'm excited to learn React</h1>
			<ol>
				<li>It's a popular library, so I'll be
					able to fit in with the cool kids!
				</li>
				<li>I'm more likely to get a job as a developer
					if I know React
				</li>
			</ol>
			<Footer/>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Page/>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
