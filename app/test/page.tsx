type Props = {};

//  todo: align the carousel items height, use this page for testing
export default function Page({}: Props) {
  return (
    <div className="flex items-stretch">
      <div className="p-12 bg-purple-400"></div>
      <div className="p-2 bg-red-400"></div>
      <div className="p-36 bg-blue-400"></div>
    </div>
  );
}
