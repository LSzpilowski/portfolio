import Link from "next/link";
import AboutMe from "./components/aboutMe";
import FixedInfo from "./components/fixedInfo";
import HappinessForm from "./components/happiness";
import ProjectList from "./components/projectList";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 ">
      <div className="lg:flex lg:flex-row lg:justify-between lg:gap-4  min-h-screen">
        <FixedInfo />
        <div
          id="content"
          className="pt-24 lg:w-1/2 lg:py-24 flex flex-col gap-16 w-full "
        >
          <AboutMe />
          <HappinessForm />
          <ProjectList />
          <div className="opacity-80">
            <p>
              Partly designed in
              <Link href="https://www.figma.com/" className="font-bold">
                {" "}
                Figma
              </Link>{" "}
              and partly on paper. Coded in
              <Link href="https://code.visualstudio.com/" className="font-bold">
                {" "}
                Visual Studio Code
              </Link>
              . Built with
              <Link href="https://nextjs.org/" className="font-bold">
                {" "}
                Next.js
              </Link>
              and
              <Link href="https://tailwindcss.com/" className="font-bold">
                {" "}
                Tailwind CSS
              </Link>
              , deployed with
              <Link href="https://vercel.com/" className="font-bold">
                {" "}
                Vercel
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
