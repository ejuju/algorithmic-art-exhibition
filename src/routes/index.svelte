<script>
    import Sketch from "../components/Sketch.svelte";
    import sketches from "../sketches/_all";
</script>

<style lang="scss">
    main {
        display: flex;
        flex-direction: column;
        padding: 0 1rem 4rem;

        .Intro {
            border: solid 1px var(--clr-txt);
            border-top: none;
            padding: 1rem;
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

<main>
    <div class="Intro">
        <h1>Algorithmic art exhibition</h1>
        <p>
            A creative coding project by
            <a href="https://croissant.studio">CROISSANT</a>
        </p>
    </div>

    <section class="Artworks">
        {#each sketches as sketch}
            <Sketch {...sketch} />
        {/each}
    </section>
</main>
