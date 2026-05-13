export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/34611688588?text=Hola!%20Quiero%20hacer%20un%20pedido"
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp"
      className="md:hidden fixed bottom-5 right-5 z-40 bg-wapp text-white rounded-full p-4 shadow-2xl shadow-wapp/40 btn-magnet"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.821 11.821 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
      </svg>
    </a>
  );
}
