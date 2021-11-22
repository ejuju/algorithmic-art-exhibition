<script>
    let nightTheme = false;
    function toggleTheme() {
        nightTheme = !nightTheme;
        if (nightTheme === false) {
            document.body.classList.replace("night", "day");
        } else {
            document.body.classList.replace("day", "night");
        }
    }
</script>

<style lang="scss">
    footer {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 0.5rem;

        p {
            padding-top: 1rem;
            border-top: solid 1px var(--clr-txt-2);
        }
    }
</style>

<footer>
    <p>Creative coding by <a href="https://croissant.studio">CROISSANT</a></p>
    <button on:click={toggleTheme}>toggle theme</button>
    <a
        href="https://www.instagram.com/algo.croissant/"
        target="_blank"
        rel="noopener noreferrer">more on instagram</a>
</footer>
