export default function Navbar({section}) {
    return (
        <nav class="navbar">
			<a href="/">
				<div class="logo-container">
					<h3 class="gradient-text">SIGLO XXI</h3>
				</div>
			</a>
			<input type="checkbox" id="toggler"/>
			<label for="toggler"><i class="ri-menu-line"></i></label>
			<div class="menu">
				<ul class="list">
					<li><a href="/" class={section==="inicio" ? "gradient-text": ""}>INICIO</a></li>
					<li><a href="/about" class={section==="sobre" ? "gradient-text": ""} >SOBRE</a></li>
					<li><a href="/credits" class={section==="creditos" ? "gradient-text": ""}>CREDITOS</a></li>
				</ul>
			</div>
		</nav>
    )
}