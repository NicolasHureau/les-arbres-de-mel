export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,css}"
    ],
    theme: {
        extend: {
            colors: {
                cream: "#f5f1e6",
                earth: "#5a4632",
                sage: "#8aa88a",
                forest: "#4f7c5f"
            }
        }
    },
    plugins: [require("daisyui")]
}