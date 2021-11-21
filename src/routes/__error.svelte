<script context="module">
    export function load({ error, status }) {
        return {
            props: {
                title: `${status} ${error.message}`,
            },
        };
    }
</script>

<script>
    export let title;
</script>

<style lang="scss">
    main {
        padding: var(--p-page);
        display: flex;
        flex-direction: column;

        h1 {
            color: var(--clr-bg-2);
            border: none;
        }

        div.Gif {
            position: relative;
            p {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                padding: 1rem;
                text-transform: uppercase;
                color: #fff;
                font-size: 1.5rem;
                font-weight: var(--fw-bold);
            }

            img {
                width: 100%;
            }
        }

        a {
            margin-top: 1rem;
        }
    }
</style>

<svelte:head>
    <title>{title} - CROISSANT</title>
</svelte:head>

<main>
    <h1>Erreur - {title}</h1>
    <div class="Gif">
        <img src="/lebowski.gif" alt="Scene from movie: The Big Lebowski" />
        <p>Where's the page, Lebowski?</p>
    </div>
    <a href="/" class="btn">Retourner à la page d'accueil</a>
</main>
