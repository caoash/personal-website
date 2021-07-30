<script>
    import { onMount } from "svelte";
    import { fade } from 'svelte/transition';
    export let isMobile;
    let ParticlesComponent;
    let particlesConfig;
    onMount(async () => {
        const module = await import("svelte-particles");
        ParticlesComponent = module.default;
    });

    particlesConfig = {
        "interactivity": {
            "events": {
            "onClick": {
                "enable": false,
                "mode": "repulse"
            },
            "onHover": {
                "enable": true,
                "mode": "bubble"
            }
            },
            "modes": {
            "bubble": {
                "distance": 400,
                "duration": 0.3,
                "opacity": 1,
                "size": 4
            },
            "grab": {
                "distance": 400,
                "links": {
                "opacity": 0.5
                }
            }
            }
        },
        "particles": {
            "links": {
                "color": {
                    "value": "#ffffff"
                },
                "distance": 500,
                "opacity": 0.4,
                "width": 2
            },
            "move": {
                "attract": {
                    "rotate": {
                        "x": 600,
                        "y": 1200
                }
            },
            "direction": "bottom",
            "enable": true,
            "path": {},
            "outModes": {
                "bottom": "out",
                "left": "out",
                "right": "out",
                "top": "out"
            },
            "spin": {}
        },
        "number": {
            "density": {
                "enable": true
            },
            "value": 15
        },
        "opacity": {
            "random": {
                "enable": true
            },
            "value": {
                "min": 0.1,
                "max": 0.5
            },
            "animation": {
                "speed": 1,
                "minimumValue": 0.1
            }
        },
        "size": {
            "random": {
                "enable": true
            },
            "value": {
                "min": 1,
                "max": 10
            },
            "animation": {
                "speed": 40,
                "minimumValue": 0.1
            }
        }}
    }
    if (isMobile) {
        particlesConfig.particles.number.value = 5;
    }
</script>
<div transition:fade="{{ duration: 1000 }}">
    <svelte:component 
        this = "{ParticlesComponent}" 
        id = "particles" 
        options = "{particlesConfig}" 
    />
</div>

<style>
    div :global(canvas) {
      @apply absolute inset-0;
    }
</style>