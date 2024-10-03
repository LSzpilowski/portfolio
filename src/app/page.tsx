import FixedInfo from "./components/fixedInfo";

export default function Home() {
  return (
    <div className="lg:flex lg:jsutify-between lg:gap-4">
      <FixedInfo />
      <div>Rest</div>
    </div>
  );
}
