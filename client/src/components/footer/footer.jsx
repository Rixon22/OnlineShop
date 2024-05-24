import React from "react";

const Footer = () => {
    return (
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top" style={{padding: '1rem'}}>
            <div class="col-md-4 d-flex align-items-center">
            <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
            </a>
            <span class="mb-3 mb-md-0 text-muted">Bordados Cufi-Tech</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3"><a class="text-muted" href="#"><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="facebook-new"/></a></li>
            <li class="ms-3"><a class="text-muted" href="#"><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/youtube-play.png" alt="youtube-play"/></a></li>
            </ul>
        </footer>
    );
}

export default Footer;