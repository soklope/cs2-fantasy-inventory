import "./footer.scss"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="page-container">
                <ul className="footer__info">
                    <li>
                        🎮 <strong>CS Fantasy Loadout</strong> is a passion project made from a love of crafting and styling CS2 inventories.
                    </li>
                    <li>
                        🛠️ Built just for fun — no sponsors, no ads, just creativity and a bit of obsession.
                    </li>
                    <li>
                        🙏 Huge thanks to <a href="https://github.com/ByMykel" target="_blank" rel="noopener noreferrer"><span>ByMykel</span></a> for the free and open CSGO API — this project wouldn't be possible without it.
                    </li>
                    <li>
                        💬 Got feedback or cool ideas? Let me know!.
                    </li>
                    <hr />
                    <li>
                        © {new Date().getFullYear()} CSLoadout.online
                    </li>
                </ul>
            </div>
        </footer>
    )
}
