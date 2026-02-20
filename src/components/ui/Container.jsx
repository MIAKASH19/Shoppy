export default function Container({ children }) {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto">
      {children}
    </div>
  );
}