export default function Navbar({section}: {section: string}) {
    return (
        <nav className="navbar">
			<a href="/">
				<div className="logo-container">
					<h3 className="gradient-text">SIGLO XXI</h3>
				</div>
			</a>
			<input type="checkbox" id="toggler"/>
			<label htmlFor="toggler"><i className="ri-menu-line"></i></label>
			<div className="menu">
				<ul className="list">
					<li><a href="/" className={section==="inicio" ? "gradient-text": ""}>INICIO</a></li>
					<li><a href="/about" className={section==="sobre" ? "gradient-text": ""} >SOBRE</a></li>
					<li><a href="/credits" className={section==="creditos" ? "gradient-text": ""}>CREDITOS</a></li>
				</ul>
			</div>
		</nav>
    )
}