window.__CONFIG__ = {
  // The URL for the CORS proxy, the URL must NOT end with a slash!
  // If not specified, the onboarding will not allow a "default setup". The user will have to use the extension or set up a proxy themselves
  VITE_CORS_PROXY_URL: "https://neon-griffin-c464ae.netlify.app/",

  VITE_BACKEND_URL: "https://server.vidbinge.com",

  // The READ API key to access TMDB
  VITE_TMDB_READ_API_KEY:
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzZlYmQ3YjM1ZWZiZDcyNmVmMDBmZjI1NjE0OWVjNiIsIm5iZiI6MTczMTA5NjY4NS4zNTUsInN1YiI6IjY3MmU3MDZkNGU0NTk5ZjI0ZTNkOTdkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sEwyD_NiJ7DK3uHTErUdSyZi9XLOig0Ypz8SrI8NdI8",

  // The DMCA email displayed in the footer, null to hide the DMCA link
  VITE_DMCA_EMAIL: null,

  // Whether to disable hash-based routing, leave this as false if you don't know what this is
  VITE_NORMAL_ROUTER: true,

  // The backend URL to communicate with
  VITE_BACKEND_URL: null,

  // A comma separated list of disallowed IDs in the case of a DMCA claim - in the format "series-<id>" and "movie-<id>"
  VITE_DISALLOWED_IDS: "",
  VITE_HAS_ONBOARDING: false,
};
