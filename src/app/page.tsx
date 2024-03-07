import TitleLogo from "./components/TitleLogo";
import PresenterCard from "./components/PresenterCard";

import presenterOne from "@/images/example-photo-1.jpg";
import presenterTwo from "@/images/example-photo-2.jpg";
import presenterThree from "@/images/example-photo-3.jpg";
import presenterFour from "@/images/example-photo-4.jpg";

export default function Home() {
  const presenters = [
    {
      id: 1,
      src: presenterOne,
      name: "Presenter One",
      topic: "Topic Title One",
    },
    {
      id: 2,
      src: presenterTwo,
      name: "Presenter Two",
      topic: "Topic Title Two",
    },
    // {
    //   id: 3,
    //   src: presenterThree,
    //   name: "Presenter Three",
    //   topic: "Topic Title Three",
    // },
    {
      id: 4,
      src: presenterFour,
      name: "Presenter Four",
      topic: "Topic Title Four",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <TitleLogo />
      <div className="flex flex-wrap justify-center">
        {presenters.map((presenter) => (
          <PresenterCard key={presenter.id} {...presenter} />
        ))}
      </div>
    </div>
  );
}
