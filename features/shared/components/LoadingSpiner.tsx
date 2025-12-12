export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-40">
      <div className="animate-spin w-8 h-8 border-4 border-gray-300 border-t-transparent rounded-full"></div>
    </div>
  );
}
