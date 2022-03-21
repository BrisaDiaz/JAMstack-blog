module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      startServerCommand: "npm run start",
      startServerReadyPattern: "ready on",
      url: ["http://localhost:3000/"],
    },
    assert: {
      assertions: {
        "topics:performance": ["warn", { minScore: 0.6 }],
        "topics:best-practices": ["error", { minScore: 0.85 }],
        "topics:accessibility": ["error", { minScore: 0.9 }],
        "topics:seo": ["error", { minScore: 0.95 }],
        "topics:pwa": "off",
      },
    },

    upload: {
      target: "temporary-public-storage",
    },
  },
};
