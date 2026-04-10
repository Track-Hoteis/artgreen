import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [showBubble, setShowBubble] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-4 right-3 lg:bottom-6 lg:right-6 z-50 flex flex-col items-end gap-3">
      {/* Speech bubble */}
      {showBubble && !dismissed && (
        <div className="relative animate-fade-in-up">
          <div className="bg-white rounded-2xl shadow-xl px-4 py-3 max-w-[220px] border border-gray-100">
            <button
              onClick={() => setDismissed(true)}
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gray-400 text-white flex items-center justify-center text-xs leading-none hover:bg-gray-500 transition-colors"
              aria-label="Fechar"
            >
              ×
            </button>
            <a
              href="https://wa.me/552127480222"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <p className="text-sm text-gray-800 font-body leading-snug">
                Posso ajudar? 😊
              </p>
              <p className="text-sm text-[#25D366] font-semibold font-body mt-0.5">
                Faça sua cotação aqui!
              </p>
            </a>
          </div>
          {/* Tail pointing down-right */}
          <div className="absolute -bottom-2 right-5 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white drop-shadow-sm" />
        </div>
      )}

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/552127480222"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="flex w-14 h-14 rounded-full bg-[#25D366] text-white items-center justify-center shadow-lg lg:hover:scale-110 lg:hover:shadow-xl transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 175.216 175.552"
          className="w-7 h-7"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M87.882 14.139c-40.626 0-73.604 32.978-73.618 73.527a73.24 73.24 0 0 0 9.821 36.738L14.268 161.5l37.864-9.937a73.5 73.5 0 0 0 35.171 8.97h.031c40.589 0 73.588-32.98 73.6-73.529.007-19.636-7.629-38.104-21.498-51.985-13.869-13.882-32.312-21.524-51.554-21.88zm-.048 134.58h-.025a61.06 61.06 0 0 1-31.12-8.515l-2.232-1.325-23.139 6.069 6.173-22.548-1.455-2.313a60.97 60.97 0 0 1-9.349-32.591c.011-33.852 27.555-61.39 61.444-61.39 16.378.038 31.81 6.434 43.38 18.015 11.57 11.582 17.932 26.975 17.926 43.351-.013 33.856-27.559 61.396-61.403 61.396v-.149zm33.688-45.97c-1.846-.923-10.924-5.39-12.616-6.006-1.693-.616-2.924-.923-4.155.923-1.231 1.846-4.77 6.006-5.848 7.237-1.078 1.231-2.155 1.385-3.999.462-1.846-.923-7.791-2.871-14.84-9.153-5.485-4.89-9.189-10.932-10.267-12.778-1.078-1.846-.115-2.846.81-3.765.831-.826 1.846-2.155 2.77-3.231.923-1.078 1.231-1.846 1.846-3.078.616-1.231.308-2.309-.154-3.231-.462-.923-4.155-10.016-5.694-13.714-1.5-3.6-3.023-3.113-4.155-3.17l-3.539-.059a6.79 6.79 0 0 0-4.924 2.309c-1.693 1.846-6.463 6.314-6.463 15.408s6.617 17.869 7.54 19.1c.923 1.231 13.022 19.882 31.548 27.878 4.405 1.902 7.844 3.036 10.524 3.887 4.423 1.405 8.449 1.207 11.628.732 3.547-.53 10.924-4.466 12.462-8.778 1.539-4.312 1.539-8.009 1.078-8.778-.462-.77-1.693-1.231-3.539-2.154z" />
        </svg>
      </a>
    </div>
  );
}
