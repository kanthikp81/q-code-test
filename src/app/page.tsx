import Head from "next/head";

export default function HomePage() {
  return (
    <div className="text-center mt-12">
      <Head>
        <title>Home</title>
      </Head>
      <h1 className="text-4xl font-bold">Welcome home</h1>
    </div>
  );
}
