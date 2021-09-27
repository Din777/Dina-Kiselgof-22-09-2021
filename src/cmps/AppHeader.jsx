import { Link } from 'react-router-dom'

export function AppHeader() {
    return (
        <section className="app-header">
            <header className="flex space-between align-center">
                <div className="header-logo">
                    <Link to="/">☀️MyWeatherApp</Link>
                </div>
                <div className="header-menu">
                    <Link to="/"><span>🌦</span></Link>
                    <Link to="/favorites"><span>💎</span></Link>
                </div>
            </header>
        </section>
    )
}