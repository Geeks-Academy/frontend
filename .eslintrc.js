module.exports = {
    extends: [
        "airbnb",
        "airbnb/hooks"
    ],
    env: {
        jest: true,
        browser: true
    },
    globals: {
        document: true,
    },
    rules: {
        "react/jsx-props-no-spreading": 0,
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".js"
                ]
            }
        ],
    }
}