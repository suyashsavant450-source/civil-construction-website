const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-yellow-500 border-t-transparent"></div>
    </div>
  );
};

export default Loader;