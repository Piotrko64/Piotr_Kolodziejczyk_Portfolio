const nextTranslate = require("next-translate");

module.exports = nextTranslate({
    images: {
        domains: ["media.graphassets.com", "eu-central-1-shared-euc1-02.graphassets.com", "eu-west-2.graphassets.com"],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
});
