import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { paises, categorias, ciudades, personas, roles } from "./src/data"; // Import mock data

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // --- API Routes ---
  
  app.get("/api/categorias", (req, res) => {
    res.json(categorias);
  });

  app.get("/api/paises", (req, res) => {
    res.json(paises);
  });

  app.get("/api/ciudades", (req, res) => {
    res.json(ciudades);
  });

  app.get("/api/roles", (req, res) => {
    res.json(roles);
  });

  app.get("/api/personas", (req, res) => {
    const { pais, area, ciudad, q } = req.query;
    let result = [...personas];

    if (pais) {
      result = result.filter(p => p.paisId === pais);
    }
    if (area) {
      result = result.filter(p => p.areaId === area);
    }
    if (ciudad) {
      result = result.filter(p => p.ciudadId === ciudad);
    }
    if (q) {
      const query = (q as string).toLowerCase();
      result = result.filter(p => 
        p.nombre.toLowerCase().includes(query) ||
        p.apellido.toLowerCase().includes(query) ||
        p.profesion.toLowerCase().includes(query) ||
        p.descripcion.toLowerCase().includes(query) ||
        p.habilidades.some(h => h.toLowerCase().includes(query))
      );
    }

    res.json(result);
  });

  app.get("/api/personas/:id", (req, res) => {
    const persona = personas.find(p => p.id === req.params.id);
    if (!persona) return res.status(404).json({ error: "No encontrada" });
    res.json(persona);
  });

  // Simulated Admin Ops
  app.post("/api/personas", (req, res) => {
    const nueva = {
      ...req.body,
      id: Date.now().toString(),
      fecha_registro: new Date().toISOString()
    };
    personas.push(nueva);
    res.status(201).json(nueva);
  });

  // --- Vite Middleware (Development) / Express Static (Production) ---
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
