import Tab from "@/components/Tab";

export default function Home() {
  return (
    <div className="m-10 grid place-content-center gap-10">
      <h1 className="text-4xl font-bold">Testing Tab Component</h1>
      <Tab links={["Home", "About", "Contact", "Blogs"]} />
    </div>
  );
}
