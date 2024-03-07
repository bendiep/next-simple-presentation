import Title from "./components/TitleLogo";
import PresenterCard from "./components/PresenterCard";
import Timer from "./components/Timer";
import Footer from "./components/Footer";

import presenterOne from "@/images/example-photo-1.jpg";
import presenterTwo from "@/images/example-photo-2.jpg";
import presenterThree from "@/images/example-photo-3.jpg";
import presenterFour from "@/images/example-photo-4.jpg";

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
    // {
    //   id: 4,
    //   src: presenterFour,
    //   name: "Sushi Dog",
    //   topic: "Top Snacks for Dogs",
    // },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Title />
      <div className="flex flex-wrap justify-center">
        {presenters.map((presenter) => (
          <PresenterCard key={presenter.id} {...presenter} />
        ))}
      </div>
      <Timer initialMinutes={1} initialSeconds={30} />
      <Footer />
    </div>
  );
}
