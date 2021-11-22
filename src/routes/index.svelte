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
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            row-gap: 1rem;
            column-gap: 2rem;

            p > a {
                color: var(--clr-1);
            }
        }

        .Artworks {
            // margin-top: 2rem;
            :global(.Sketch) {
                margin-top: 4rem;
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
        <p>
            Creative coding by
            <a href="https://croissant.studio">CROISSANT</a>
        </p>
    </div>

    <section class="Artworks">
        {#each sketches as sketch}
            <Sketch {...sketch} />
        {/each}
    </section>
</main>
