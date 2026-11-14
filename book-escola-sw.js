// book-escola: escopo limitado a esta pasta; sem caches compartilhados.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
