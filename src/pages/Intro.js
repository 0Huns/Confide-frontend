import React from "react";
import kakaoLoginImage from "../assets/kakao_login_large_wide.png";
import image from "../assets/introimage.jpg";
import axios from "axios";

function Intro() {
  const handleKakaoLogin = async () => {
    try {
      const res = await axios.get("/api/kakaoAuth");
      console.log(res);
      if (res.data.kakaoAuthUrl) {
        window.location.href = res.data.kakaoAuthUrl;
      }
    } catch (error) {
      console.error("카카오 로그인 URL 요청 실패:", error);
      alert("로그인 요청 중 오류가 발생했습니다.");
    }
  };

  return (
    <>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Get started CONFIDE!
            </h1>

            <p className="mt-4 text-gray-500">
              CONFIDE 서비스는 하루의 고민을 털어버릴 수 있게 도와줍니다.
              <br />
              여러분의 고민과 감정을 버리고 가세요!
            </p>
          </div>
          <div className="max-w-md mx-auto mt-8 mb-0 space-y-4 hover:cursor-pointer">
            <img
              src={kakaoLoginImage}
              alt="카카오 로그인"
              onClick={handleKakaoLogin}
            />
          </div>
        </div>

        <div className="relative w-full h-64 sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt="배경 이미지"
            src={image}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
      </section>
    </>
  );
}

export default Intro;
