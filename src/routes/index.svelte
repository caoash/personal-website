<script>
    import "../styles/tailwind-output.css";
    import NamePlate from "../lib/NamePlate.svelte";
    import ContactBar from "../lib/ContactBar.svelte";
    import Particles from "../lib/Particles.svelte";
    import Info from "../lib/Info.svelte";
    
    import {onMount} from "svelte";
    

    let isMobile = false;
    const checkPoint = 100;
    let y;

    onMount(async () => {
        isMobile = window.innerWidth <= 768;
        // let myImport = await import("svelte-particles");
        // console.log(myImport.default);
        console.log(isMobile);
    });
    
</script>

<svelte:window bind:scrollY={y}/>


<html lang = "en" class = "scroll-smoothly font-gowun-dodum select-none">
    <div class = bg-color-4>
        <div class = "flex justify-center h-screen items-center">
            <Particles isMobile = {isMobile}/>
            <div class = "flex flex-col pb-10 sm:pb-0">
                <NamePlate name = "Michael Cao" />
                <ContactBar />
                <a href = "#about-text">
                    <img src = "https://static.thenounproject.com/png/16957-200.png" style = "opacity : {1 - Math.max(0, y / 150)}" class = "z-50 absolute inset-x-20 bottom-10 sm:bottom-20 m-auto animate-bounce w-10 h-10" alt = "Error"/>
                </a>
            </div>
        </div>
    </div>
    
    <div class = "flex bg-color-2 justify-center h-screen items-center scroll-smoothly" id = "about-text">
        <div class = "flex flex-col">
            <div class = "container">
                <h1 class = "text-color-5 text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-center select-none pb-14">About Me</h1> 
                <h2 class = "text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">Hi there! I'm Michael Cao, an incoming Senior at Ladue Horton Watkins High School.</h2>
            </div>
        </div>
    </div>
    
    <div class = "flex bg-color-4 justify-center pt-20 pb-20 pl-10 pr-10 items-center min-h-screen">
        <div class = "flex flex-col">
            <div class = "container">
                <h1 class = "text-color-1 text-3xl sm:text-5xl md:text-7xl lg:text-9xl text-center select-none pb-5 sm:pb-5 md:pb-10 lg:pb-20">Projects</h1> 
                <h2 class = "text-color-1 text-lg sm:text-xl md:text-2xl lg:text-4xl text-center pb-5 sm:pb-5 md:pb-10 lg:pb-20"> I love the creativity that computer science gives me. Check out some of the projects I've been working on!</h2>
                <Info />
            </div>
        </div>
    </div>
    
</html>
