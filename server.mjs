import { createServer } from "http";
import handler from "serve-handler";

const PORT = parseInt(process.env.PORT || "3000", 10);

const server = createServer((req, res) =>
  handler(req, res, {
    public: "dist",
    cleanUrls: true,
    rewrites: [{ source: "**", destination: "/index.html" }],
  })
);

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
