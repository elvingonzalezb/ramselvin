import React from 'react';


export default function ButtonAppBar() {
    
    return (
        <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
               
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a href="/" class="button is-primary">
                        Sign up
                        </a>
                        <a href="/" class="button is-warning">
                        Log in
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}