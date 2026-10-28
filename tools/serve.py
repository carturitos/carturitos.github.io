"""Servidor estático mínimo con fallback SPA para previsualizar `dist/`.

Uso:
    python tools/serve.py [puerto] [carpeta]

Sirve la carpeta indicada (por defecto landing_page/dist) y devuelve index.html
cuando la ruta no existe, imitando el comportamiento de GitHub Pages + 404.html.
"""

import os
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 4173
ROOT = sys.argv[2] if len(sys.argv) > 2 else os.path.join("landing_page", "dist")


class SpaHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def send_head(self):
        requested = self.translate_path(self.path)
        if not os.path.exists(requested):
            self.path = "/index.html"
        return super().send_head()

    def log_message(self, fmt, *args):
        sys.stderr.write("%s - %s\n" % (self.address_string(), fmt % args))


if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    server = ThreadingHTTPServer(("127.0.0.1", PORT), SpaHandler)
    print(f"Sirviendo {ROOT} en http://127.0.0.1:{PORT}", flush=True)
    server.serve_forever()
