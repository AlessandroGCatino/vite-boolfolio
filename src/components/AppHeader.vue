<template>
    <nav
        class="navbar navbar-expand-sm navbar-light bg-light"
    >
        <div class="container">
            <a class="navbar-brand" href="#">Navbar</a>
            <button
                class="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <router-link :to="{name: 'home'}" class="nav-link">
                            Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'projects'}" class="nav-link">
                            Projects
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'contact-us'}" class="nav-link">
                            Contattaci
                        </router-link>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
    
</template>

<script>
    export default {
        name: "AppHeader"
    }
</script>

<style>

</style>