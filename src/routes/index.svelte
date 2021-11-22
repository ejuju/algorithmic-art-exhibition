<script>
    import Sketch from "../components/Sketch.svelte";
    import sketches from "../sketches/_all";
</script>

<style lang="scss">
    main {
        display: flex;
        flex-direction: column;
        padding: 1rem 1rem 4rem;

        .Intro {
            display: flex;
            flex-direction: column;
            align-items: center;
            row-gap: 1rem;
            column-gap: 2rem;

            h1 {
                // text-align: center;
            }
        }

        .Artworks {
            // margin-top: 2rem;
            display: flex;
            flex-direction: column;

            :global(.Sketch) {
                margin-top: 3rem;
            }
        }
    }
</style>

<svelte:head>
    <title>Algorithmic art exhibition by CROISSANT</title>
</svelte:head>

<main>
    <div class="Intro">
        <h1>Algorithmic art exhibition</h1>
    </div>

    <section class="Artworks">
        {#each sketches as sketch}
            <Sketch {...sketch} />
        {/each}
    </section>
</main>
