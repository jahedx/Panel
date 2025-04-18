import ValidationComponent from "@/components/ValidationComponent";
import { inputConfigs } from "@/configs/input/default";
import { Input, useInput } from "input-master";
import { useState, useContext } from "react";
import { SidebarContext } from "@/contexts/SidebarContext";

const SearchBar = () => {
  const { useRegister } = useInput();
  const [searchWord, setSearchWord] = useState<string>("");
  const { sidebarStatus } = useContext(SidebarContext);

  return (
    <div
      className={`m-4 rounded-md ${sidebarStatus === "closed" ? "hidden" : ""}`}
    >
      <Input
        {...inputConfigs()}
        placeholder={"جستجو"}
        id="code"
        titleClassName="w-0"
        name="text"
        type="text"
        validationOn="submit"
        minLength={3}
        validationComponent={ValidationComponent}
        register={useRegister}
        onChange={(e) => setSearchWord(e.target.value)}
        required
      />
      {sidebarStatus === "open" && searchWord}
    </div>
  );
};

export default SearchBar;
