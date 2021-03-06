<!-- P5.js sketch -->
<script>
    import { getSketchWidth, getSketchHeight } from "../util/p5";

    import { onDestroy, onMount } from "svelte";
    import { browser } from "$app/env";
    import Play from "../icons/Play.svelte";
    import Pause from "../icons/Pause.svelte";
    import Restart from "../icons/Restart.svelte";
    import Picture from "../icons/Picture.svelte";

    let observer;
    let canvasWrapper;

    // Sketch properties
    export let sketchFunc;
    export let title;
    export let interactive = false;
    let looping;
    let width;
    let paused = null;

    // API properties
    let p5instance = undefined;
    let target = undefined;

    $: {
        if (browser && p5instance) {
            if (looping === true) {
                p5instance.loop();
            } else {
                p5instance.noLoop();
            }
        }
    }

    //
    onMount(async () => {
        // Setup p5js instance
        const library = await import("p5");
        const { default: p5 } = library;
        const entries = Object.entries(library);
        const nativeClasses = entries.filter(
            ([key, value]) =>
                value instanceof Function && key[0] !== "_" && key !== "default"
        );
        p5instance = new p5((instance) => {
            instance = augmentClasses(instance, nativeClasses);
            return sketchFunc(instance);
        }, target);

        // Set looping to sketch initial isLooping value
        looping = p5instance.isLooping();

        // Default window resized handler
        width = p5instance.width; // saving previous width as state to avoid resizing the canvas for vertical change only
        p5instance.windowResized = () => {
            // Only resize if width changes
            if (width !== getSketchWidth()) {
                width = getSketchWidth();
                p5instance.resizeCanvas(width, getSketchHeight());
            }
        };

        // Add autoplay
        observer = new IntersectionObserver((entries) => {
            console.log(entries[0], paused);
            if (entries[0].intersectionRatio > 0 && paused !== true) {
                looping = true;
            } else {
                looping = false;
            }
        });

        observer.observe(canvasWrapper);
    });

    onDestroy(() => {
        observer?.unobserve(canvasWrapper);
    });

    // Helper functions
    function ref(node) {
        target = node;
        return {
            destroy() {
                target = undefined;
            },
        };
    }

    function augmentClasses(instance, classes) {
        classes.forEach(([key, value]) => (instance[key] = value));
        return instance;
    }

    // Controls
    function savePicture() {
        p5instance.saveCanvas(title, "jpg");
    }

    function toggleLoop() {
        if (p5instance?.isLooping() === true) {
            looping = false;
            paused = true;
        } else {
            looping = true;
        }
    }

    function resetSketch() {
        p5instance.setup();
        p5instance.draw();
    }
</script>

<style lang="scss">
    .Sketch {
        user-select: none;
        display: flex;
        // flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        column-gap: 2rem;
        max-width: max-content;
        margin: 0 auto;

        .WrapsCanvas {
            border: solid 1px var(--clr-txt);

            overflow: scroll;
            display: flex;
            flex-direction: column;
        }

        h2 {
            padding: 1rem;
            width: 100%;
            text-align: center;
            border: solid 1px var(--clr-txt);
            border-top: none;
            border-bottom: none;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            row-gap: 0.5rem;
            column-gap: 1rem;

            span {
                font-size: 1rem;
                font-weight: var(--fw);
            }
        }

        .Controls {
            width: 100%;
            padding: 0 1rem 1rem;
            border: solid 1px var(--clr-txt);
            border-top: none;

            display: flex;
            flex-wrap: wrap;
            // justify-content: space-between;

            row-gap: 0.5rem;
            column-gap: 2rem;

            button {
                text-decoration: underline;
                display: flex;
                align-items: center;
                color: var(--clr-txt-1);
                :global(svg) {
                    margin-top: 0.1rem;
                    margin-right: 0.5rem;
                }
            }
        }
    }
</style>

<section class="Sketch">
    <div class="WrapsCanvas" use:ref bind:this={canvasWrapper} />

    <h2>
        {title}
        {#if interactive}<span>[interactive]</span>{/if}
    </h2>

    <section class="Controls">
        <button on:click={savePicture}><Picture />Take a picture</button>
        <button on:click={resetSketch}><Restart />Reset</button>

        <button on:click={toggleLoop}>
            {#if looping === true}
                <Pause />Pause
            {:else}
                <Play />Play
            {/if}
        </button>
    </section>
</section>
