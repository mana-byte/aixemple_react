import localFont from "next/font/local";
import "./globals.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata = {
	title: "Post It",
	description: "A simple note taking app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<nav className="navbar navbar-expand-lg bg-body-tertiary">
					<div className="container-fluid">
						<a className="navbar-brand" href="/">
							Post It
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNavDropdown"
							aria-controls="navbarNavDropdown"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon" />
						</button>
						<div className="collapse navbar-collapse" id="navbarNavDropdown">
							<ul className="navbar-nav">
								<li className="nav-item">
									<a
										className="nav-link active"
										aria-current="page"
										href="https://github.com/mana-byte/aixemple_react"
									>
										Github
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				{children}
			</body>
		</html>
	);
}
