import React, { Dispatch, SetStateAction } from "react";
import { ReactComponent as Pre } from "../../assets/pre.svg";

export type NextProps = {
  setNextMove: Dispatch<SetStateAction<number>>;
  image: boolean;
};

export default function Head({ setNextMove, image }: NextProps) {
  const onClickNextButton = () => {
    if (image) {
      alert("사진을 업로드 해주세요!");
    } else {
      setNextMove((pre) => pre + 1);
    }
  };
  return (
    <div className="w-full pb-4 flex items-center justify-between px-5 border-b-[1px] border-st-gray-03">
      <div className="flex">
        <Pre
          onClick={() => setNextMove((pre) => pre - 1)}
          className="cursor-pointer"
        ></Pre>
        <p className="translate-x-4 font-bold">게시글 작성</p>
      </div>
      <div>
        <button onClick={onClickNextButton}>다음</button>
      </div>
    </div>
  );
}
