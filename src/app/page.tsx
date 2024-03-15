import Title from "./components/Title";
import PresenterCard from "./components/PresenterCard";
import Timer from "./components/Timer";
import Footer from "./components/Footer";

import presenterOne from "@/images/example-photo-1.jpeg";
import presenterTwo from "@/images/example-photo-2.jpeg";
import presenterThree from "@/images/example-photo-3.jpeg";

export default function Home() {
  const presenters = [
    {
      id: 1,
      src: presenterOne,
      name: "Alexander Bennett",
      topic: "Effective Time Management",
    },
    {
      id: 2,
      src: presenterTwo,
      name: "Sophia Marshall",
      topic: "Workplace Communication",
    },
    {
      id: 3,
      src: presenterThree,
      name: "Jonathan Pierce",
      topic: "Fostering Resilience",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Title />
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        featuring
      </h2>
      <div className="flex flex-wrap justify-center">
        {presenters.map((presenter) => (
          <PresenterCard key={presenter.id} {...presenter} />
        ))}
      </div>
      <Timer />
      <Footer />
    </div>
  );
}
