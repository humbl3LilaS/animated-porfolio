export default function ContactInfo() {
  return (
    <div className="flex-1 w-full">
      <h2 className={"max-w-96 text-7xl font-bold mb-8"}>
        Let's work together
      </h2>
      <p className={"mb-8"}>
        <span className={"mb-2 block text-2xl font-bold"}>Mail</span>
        <span>superedelweiss@gmail.com</span>
      </p>
      <p className={"mb-8"}>
        <span className={"mb-2 block text-2xl font-bold"}>Address</span>
        <span>Kyoto, Japan</span>
      </p>
      <p className={"mb-8"}>
        <span className={"mb-2 block text-2xl font-bold"}>Phone</span>
        <span>+12345678</span>
      </p>
    </div>
  );
}
