const nextTranslate = require("next-translate");

module.exports = nextTranslate({
    images: {
        domains: ["media.graphassets.com"],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
});
