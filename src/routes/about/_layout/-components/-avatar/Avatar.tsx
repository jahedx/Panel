import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};

const Avatar = (props: Props) => {
  return (
    <div className="rounded-2xl w-full bg-primary-50 hover:bg-primary-100 transition-colors cursor-pointer px-1 py-2 flex gap-4 items-center ">
      <img
        src="https://img.a.transfermarkt.technology/portrait/header/14421-1719153884.jpg?lm=1"
        className="rounded-full h-11 w-11 mx-2  object-cover"
      />
      <div>
        <h1 className="font-bold">داود بکام نژاد</h1>
        <p className="text-foreground/70">مدیر</p>
      </div>
      <FontAwesomeIcon
        className="text-xl mr-auto ml-4 hover:text-primary-600 transition-colors"
        icon={faArrowRightFromBracket}
      />
    </div>
  );
};

export default Avatar;
