function FullPageSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-50">
      <div
        className="relative w-16 h-16 rounded-full animate-spin"
        style={{
          background: "conic-gradient(transparent 30%, rgb(37, 99, 235))", // Tailwind blue-600
          WebkitMask:
            "radial-gradient(farthest-side, transparent calc(100% - 6px), black 0)",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 6px), black 0)",
        }}
      >
        <div
          className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-600 rounded-full"
          style={{ top: "2px" }}
        ></div>
      </div>
    </div>
  );
}

export default FullPageSpinner;
